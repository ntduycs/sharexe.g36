import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getRecentContacts } from '../../services/message.service';
import { getDateTimeToNow } from '../../utils/datetime';

class SmallCardifyMessage extends Component {
    state = {
        contacts: []
    }

    fetchMessages = () => {
        getRecentContacts().then(({ data: contacts }) => {
            this.setState({ contacts });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const { user } = this.props;
        const { contacts } = this.state;

        return (
            <div className="messages">
                {contacts.map((contact) => (
                    <Link key={contact.partnerUsername} to={`/messages?username=${contact.lastMessageUsername}&name=${contact.lastMessageFullName}`} className="message">
                        <div className="message__actions_avatar">
                            <div className="avatar">
                                <img src={`images/notification_head${contact.profileImage}.png`} alt="" />
                            </div>
                        </div>
                                                    
                        <div className="message_data">
                            <div className="name_time">
                                <div>
                                    <div className="name">
                                        <p>{contact.partnerFullName}</p>
                                    </div>

                                    <div className="time">{getDateTimeToNow(contact.lastMessageCreatedAt)}</div>
                                </div>
                                <p>{user.username !== contact.lastMessageUsername ? contact.lastMessageFullName : "You"}: &nbsp;{contact.lastMessageContent}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}


export default SmallCardifyMessage;