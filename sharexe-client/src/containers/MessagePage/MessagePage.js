import React, { Component } from 'react';
import qs from 'query-string';

import Conversation from '../../components/Conversation/Conversation';
import CardifyMessage from '../../components/CardifyMessage/CardifyMessage';

class MessagePage extends Component {
    state = {
        contacts: [],
        filterContacts: [],
        participantFilterText: '',
        unreadMessagesCount: 3
    }

    componentDidMount = () => {
        /** TODO: Fetch recent contacts */
        let contacts = [{
            username: 'ntn',
            name: 'Nguyễn Trọng Nghĩa',
            lastMessageContent: 'lmao',
            lastMessageDateTime: 'Just now',
            avatar: 'images/notification_head4.png'
        }, {
            username: 'nht',
            name: 'Nguyễn Văn A',
            lastMessageContent: 'this is the message',
            lastMessageDateTime: '1 minute ago',
            avatar: 'images/notification_head5.png'
        }];
        
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });      
        /** If this participant does not appear in recent contacts, maybe this situation comes from <Redirect /> */
        if (query.username !== undefined && query.name !== undefined && !contacts.some(contact => contact.username === query.username)) {
            /** TODO: Check if this participant exists */
            contacts = [{   
                username: query.username,
                name: query.name,
                avatar: 'images/notification_head2.png'
            }, ...contacts];
        }

        this.setState({ contacts, filterContacts: JSON.parse(JSON.stringify(contacts)) });
    }

    onParticipantFilterTextChanged = (e) => {
        const target = e.target.value;
        this.setState((prevState) => ({
            participantFilterText: target,
            filterContacts: prevState.contacts.filter((contact) => contact.username.toLowerCase().includes(target.toLowerCase()) || contact.name.toLowerCase().includes(target.toLowerCase()))
        }));
    }

    render() {
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        const activeParticipant = this.state.contacts.find(contact => query.username === contact.username) || {};
        return (
            <section className="message_area">
                <div className="container">
                    <div className="row">
                        <CardifyMessage
                            activeParticipantUsername={activeParticipant.username}
                            participantFilterText={this.state.participantFilterText}
                            filterContacts={this.state.filterContacts}
                            onParticipantFilterTextChanged={this.onParticipantFilterTextChanged}
                            unreadMessagesCount={this.state.unreadMessagesCount}/>
                        
                        <Conversation
                            activeParticipant={activeParticipant}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MessagePage;