import React from 'react';
import { NavLink } from 'react-router-dom';

const cardifyMessage = (props) => (
    <div className="col-lg-5">
        <div className="cardify messaging_sidebar">
            <div className="messaging__header" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="messaging_menu">
                    <span id="drop2" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span className="lnr lnr-inbox"></span>Inbox<span className="msg">{props.unreadMessagesCount}</span>
                    </span>
                </div>
                            
            </div>
                        
            <div className="messaging__contents">
                <div className="message_search">
                    <input type="text" placeholder="Search messages..." value={props.participantFilterText} onChange={props.onParticipantFilterTextChanged} />
                    <span className="lnr lnr-magnifier"></span>
                </div>

                <div className="messages">
                    {props.filterContacts.map((contact) => (
                        <NavLink to={`/messages?username=${contact.username}&name=${contact.name}`}>
                            <div className={"message" + (contact.username === props.activeParticipantUsername ? " active" : "")}>
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
                                        <img src={contact.avatar} alt="" />
                                    </div>
                                </div>

                                <div className="message_data">
                                    <div className="name_time">
                                        <div className="name">
                                            <p>{contact.name}</p>
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

export default cardifyMessage;