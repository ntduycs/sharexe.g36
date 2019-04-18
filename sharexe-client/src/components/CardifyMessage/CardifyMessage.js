import React, { Component } from 'react';
import qs from 'query-string';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import './CardifyMessage.css';

class CardifyMessage extends Component {
    state = {
        contacts: [],
        filterContacts: []
    }

    componentDidMount = () => {
        const contacts = [{
            otherParticipant: 'ntn',
            otherParticipantName: 'Nguyễn Trọng Nghĩa',
            lastMessageContent: 'lmao',
            lastMessageDateTime: 'Just now',
            otherParticipantAvatar: 'images/notification_head4.png'
        }, {
            otherParticipant: 'nht',
            otherParticipantName: 'Nguyễn Văn A',
            lastMessageContent: 'this is the message',
            lastMessageDateTime: '1 minute ago',
            otherParticipantAvatar: 'images/notification_head4.png'
        }];

        this.setState({ contacts, filterContacts: JSON.parse(JSON.stringify(contacts)) });
    }

    onParticipantFilterTextChanged = (e) => {
        const target = e.target.value.toLowerCase();

        this.setState((prevState) => ({
            filterContacts: prevState.contacts.filter((contact) => contact.otherParticipant.toLowerCase().includes(target) || contact.otherParticipantName.toLowerCase().includes(target))
        }));
    }

    render() {
        const activeOtherParticipant = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true
        }).username;


        return (
            <div className="col-lg-5">
                <div className="cardify messaging_sidebar">
                    <div className="messaging__header" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="messaging_menu">
                            <span id="drop2" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span className="lnr lnr-inbox"></span>Inbox<span className="msg">6</span>
                            </span>
                        </div>
                            
                    </div>
                        

                    <div className="messaging__contents">
                        <div className="message_search">
                            <input type="text" placeholder="Search messages..." onChange={this.onParticipantFilterTextChanged}/>
                            <span className="lnr lnr-magnifier"></span>
                        </div>

                        <div className="messages">
                            {this.state.filterContacts.map((contact) => (
                                <NavLink to={"/messages?username=" + contact.otherParticipant}>
                                    <div className={"message" + (contact.otherParticipant === activeOtherParticipant ? " active" : "")}>
                                        <div className="message__actions_avatar">
                                            <div className="actions">
                                                <span className="fa fa-star-o"></span>
                                                <div className="custom_checkbox">
                                                    <input type="checkbox" id="ch2" />
                                                    <label htmlFor="ch2">
                                                        <span className="shadow_checkbox"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <img src={contact.otherParticipantAvatar} alt="" />
                                            </div>
                                        </div>

                                        <div className="message_data">
                                            <div className="name_time">
                                                <div className="name">
                                                    <p>{contact.otherParticipantName}</p>
                                                    <span className="lnr lnr-envelope"></span>
                                                </div>

                                                <span className="time">{contact.lastMessageDateTime}</span>
                                                <p className="MessageShortContent">{contact.lastMessageContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CardifyMessage);