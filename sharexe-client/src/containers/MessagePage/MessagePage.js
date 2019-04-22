import React, { Component } from 'react';
import qs from 'query-string';

import Conversation from '../../components/Conversation/Conversation';
import CardifyMessage from '../../components/CardifyMessage/CardifyMessage';

import { getUser } from '../../services/user.service';
import { getRoomMessages, getRecentContacts } from '../../services/message.service';

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

            if (query.username !== undefined && query.name !== undefined && !contacts.some(contact => contact.partnerUsername === query.username)) {
                try {
                    const { data: user } = await getUser(query.username);

                    contacts.unshift({
                        partnerUsername: query.username,
                        partnerFullName: query.name,
                        profileImage: user.profileImage
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

    hoistContact = (hoistedContact) => {
        this.setState((prevState) => {
            const otherContacts = prevState.contacts.filter((contact) => contact.roomId !== hoistedContact.roomId);
            otherContacts.unshift(hoistedContact)
            return {
                contacts: otherContacts,
                filterContacts: otherContacts.filter((contact) => contact.partnerUsername.toLowerCase().includes(prevState.participantFilterText.toLowerCase()) || contact.partnerFullName.toLowerCase().includes(contact.participantFilterText.toLowerCase()))
            }
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
                            filterContacts={this.state.filterContacts}
                            onParticipantFilterTextChanged={this.onParticipantFilterTextChanged}
                            unreadMessagesCount={this.state.unreadMessagesCount}/>
                        
                        <Conversation
                            activeParticipant={activeParticipant}
                            hoistContact={this.hoistContact}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MessagePage;