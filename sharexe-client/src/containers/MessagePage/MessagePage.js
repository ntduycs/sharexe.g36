import React, { Component, useImperativeHandle } from 'react';
import qs from 'query-string';

import Conversation from '../../components/Conversation/Conversation';
import CardifyMessage from '../../components/CardifyMessage/CardifyMessage';

import { getUser } from '../../services/user.service';
import { getRoomMessages, getRecentContacts } from '../../services/message.service';
import Socket from '../../socket';
import * as socketEvents from '../../constants/socketEvents';

class MessagePage extends Component {
    state = {
        contacts: [],
        filterContacts: [],
        participantFilterText: '',
        unreadMessagesCount: 3,
        isLoading: true,
        userNotFound: false
    }

    componentDidMount = async () => {
        try {
            const { data: contacts } = await getRecentContacts();
            const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

            if (query.username !== undefined && !contacts.some(contact => contact.partnerUsername === query.username)) {
                try {
                    const { data: user } = await getUser(query.username);

                    contacts.unshift({
                        partnerId: user.id,
                        partnerUsername: user.username,
                        partnerFullName: user.fullName,
                        profileImage: user.profileImage,
                        isNew: true
                    });
                } catch (e) {
                    this.setState({ userNotFound: true });
                }
            }

            this.setState({ contacts, filterContacts: JSON.parse(JSON.stringify(contacts)) });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    onParticipantFilterTextChanged = (e) => {
        const target = e.target.value;
        this.setState((prevState) => ({
            participantFilterText: target,
            filterContacts: prevState.contacts.filter((contact) => contact.partnerUsername.toLowerCase().includes(target.toLowerCase()) || contact.partnerFullName.toLowerCase().includes(target.toLowerCase()))
        }));
    }

    hoistContact = (hoistedContactId, lastMessage) => {
        this.setState((prevState) => {
            let otherContacts = prevState.contacts;
            let notCreatedYetRoom = prevState.contacts.find(contact => contact.roomId === undefined);

            if (notCreatedYetRoom) {
                notCreatedYetRoom.lastMessageContent = lastMessage;
                notCreatedYetRoom.roomId = hoistedContactId;
                otherContacts = prevState.contacts.filter((contact) => contact !== notCreatedYetRoom);
                otherContacts.unshift(notCreatedYetRoom);
            } else {
                const hoistedContact = prevState.contacts.find(contact => contact.roomId === hoistedContactId);
                otherContacts = prevState.contacts.filter((contact) => contact !== hoistedContact);
                hoistedContact.lastMessageContent = lastMessage;
                hoistedContact.lastMessageCreatedAt = new Date().getTime();
                otherContacts.unshift(hoistedContact);
            }

            return { contacts: otherContacts };
        });
    }

    hoistContactForReceiver = (hoistedContactId, lastMessage, partnerFullName, partnerUsername, profileImage) => {
        this.setState((prevState) => {
            let otherContacts = prevState.contacts;
            let notCreatedYetRoom = prevState.contacts.find(contact => contact.roomId === undefined);

            if (notCreatedYetRoom) {
                notCreatedYetRoom.lastMessageContent = lastMessage.text;
                notCreatedYetRoom.roomId = hoistedContactId;
                otherContacts = prevState.contacts.filter((contact) => contact !== notCreatedYetRoom);
                otherContacts.unshift(notCreatedYetRoom);
            } else {
                let foundRoom = prevState.contacts.find(contact => contact.roomId === hoistedContactId);

                if (!foundRoom) {
                    otherContacts.unshift({
                        roomId: hoistedContactId,
                        lastMessageContent: lastMessage.text,
                        lastMessageCreatedAt: new Date().getTime(),
                        partnerFullName,
                        partnerUsername,
                        profileImage
                    });
                } else {
                    const hoistedContact = prevState.contacts.find(contact => contact.roomId === hoistedContactId);
                    otherContacts = prevState.contacts.filter((contact) => contact !== hoistedContact);
                    hoistedContact.lastMessageContent = lastMessage.text;
                    hoistedContact.lastMessageCreatedAt = new Date().getTime();
                    otherContacts.unshift(hoistedContact);
                }
            }

            return { contacts: otherContacts };
        });
    }

    render() {
        if (this.state.isLoading) return null;

        if (this.state.userNotFound) return <div>User not found</div>

        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        const activeParticipant = this.state.contacts.find(contact => query.username === contact.partnerUsername) || {};
        return (
            <section className="message_area">
                <div className="container">
                    <div className="row">
                        <CardifyMessage
                            activeParticipantUsername={activeParticipant.partnerUsername}
                            participantFilterText={this.state.participantFilterText}
                            filterContacts={this.state.contacts}
                            onParticipantFilterTextChanged={this.onParticipantFilterTextChanged}
                            unreadMessagesCount={this.state.unreadMessagesCount}/>
                        
                        <Conversation
                            activeParticipant={activeParticipant}
                            hoistContact={this.hoistContact}
                            hoistContactForReceiver={this.hoistContactForReceiver}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MessagePage;