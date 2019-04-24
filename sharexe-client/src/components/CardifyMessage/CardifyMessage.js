import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { getDateTimeToNow } from '../../utils/datetime';


const cardifyMessage = (props) => (
    <div className="col-lg-5">
        <div className="cardify messaging_sidebar">
            <div className="messaging__header" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="messaging_menu">
                    <span id="drop2" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{display:"flex", alignItems: "center"}}>
                        <span className="lnr lnr-inbox" style={{fontSize: 18}}></span><span>INBOX</span>
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
                        <NavLink key={contact.partnerUsername} to={`/messages?username=${contact.partnerUsername}&name=${contact.partnerFullName}`}>
                            <div className={"message" + (contact.partnerUsername === props.activeParticipantUsername ? " active" : "")}>
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
                                        <img src={`images/notification_head${contact.profileImage}.png`} alt="" />
                                    </div>
                                </div>

                                <div className="message_data">
                                    <div className="name_time">
                                        <div className="name">
                                            <p>{contact.partnerFullName}</p>
                                            <span className="lnr lnr-envelope"></span>
                                        </div>

                                        <span className="time">{getDateTimeToNow(contact.lastMessageCreatedAt)}</span>
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

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(cardifyMessage);