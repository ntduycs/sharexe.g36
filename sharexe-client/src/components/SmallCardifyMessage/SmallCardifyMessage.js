import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SmallCardifyMessage extends Component {
    state = {
        contacts: []
    }

    fetchMessages = () => {
        /** TODO: Fetch recent contacts */
        this.setState({contacts: [{
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
        }]});
    }

    render() {
        return (
            <div className="messages">
                
                {this.state.contacts.map((contact) => (
                    <Link to={`/messages?username=${contact.username}&name=${contact.name}`} className="message">
                    <div className="message__actions_avatar">
                        <div className="avatar">
                            <img src={contact.avatar} alt="" />
                        </div>
                    </div>
                                                    
                    <div className="message_data">
                        <div className="name_time">
                            <div>
                                <div className="name">
                                        <p>{contact.name}</p>
                                </div>

                                <div className="time">{contact.lastMessageDateTime}</div>
                            </div>
                            <p>{contact.lastMessageContent}</p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        );
    }
}

export default SmallCardifyMessage;