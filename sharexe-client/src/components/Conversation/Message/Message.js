import React, { Component } from 'react';

import { getDateTimeToNow } from '../../../utils/datetime';
import { addMessage } from '../../../services/message.service';

class Message extends Component {
    componentDidMount = async () => {
        if (this.props.isNew) {
            try {
                await addMessage(this.props.text, this.props.roomId);
            } catch (e) {
                alert(e);
            }
        }
    }

    shouldComponentUpdate = () => {
        return false;
    }

    render() {
        return (
            (
                <div className="conversation">
                    <div className="head">
                        <div className="chat_avatar">
                            <img src={`images/notification_head${this.props.author === this.props.user.username ? this.props.user.profileImage : this.props.profileImage}.png`} alt="Notification avatar" />
                        </div>

                        <div className="name_time">
                            <div>
                                <h4>{this.props.author === this.props.user.username ? "You" : this.props.authorName}</h4>
                                <p></p>
                            </div>
                            <span className="email">{getDateTimeToNow(this.props.createdAt)}</span>
                        </div>
                                    
                    </div>

                    <div className="body">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            )
        );
    }
}

export default Message;
