import React from 'react';

const Conversation = (props) => (
    <div className="col-lg-7">
        <div className="chat_area cardify">
            <div className="chat_area--title">
                <h3>Message with &nbsp;<span className="name">{props.activeOtherParticipantName}</span>
                </h3>
                <div className="message_toolbar">
                    <button style={{background: 'none', outline: 'none', border: 0}} id="drop1" className="dropdown-trigger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="images/menu_icon.png" className="dropdown-trigger" alt="Menu icon" />
                    </button>

                    <ul className="custom_dropdown dropdown-menu" aria-labelledby="drop1">
                        <li>
                            <span>Mark as unread</span>
                        </li>
                        <li>
                            <span>Dropdown link</span>
                        </li>
                        <li>
                            <span>All Attachments</span>
                        </li>
                    </ul>
                                
                </div>
                            
            </div>
                        

            <div className="chat_area--conversation">
                <div className="conversation">
                    <div className="head">
                        <div className="chat_avatar">
                            <img src="images/notification_head5.png" alt="Notification avatar" />
                        </div>

                        <div className="name_time">
                            <div>
                                <h4>Codepoet</h4>
                                <p>Mar 2, 2019 at 2:14 pm</p>
                            </div>
                            <span className="email">jonathan@domain.com</span>
                        </div>
                                    
                    </div>
                                

                    <div className="body">
                        <p>Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec
                            vitae leo at sem lobortis porttitor eu conse quat risus. Mauris sed congue orci.
                                        Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue.</p>
                    </div>
                                

                </div>
                            

                <div className="conversation">
                    <div className="head">
                        <div className="chat_avatar">
                            <img src="images/notification_head4.png" alt="Notification avatar" />
                        </div>

                        <div className="name_time">
                            <div>
                                <h4>AazzTech</h4>
                                <p>Mar 2, 2019 at 2:14 pm</p>
                            </div>
                            <span className="email">Me</span>
                        </div>
                                    
                    </div>
                                

                    <div className="body">
                        <p>Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec
                            vitae leo at sem lobortis porttitor eu conse quat risus. Mauris sed congue orci.
                                        Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue.</p>
                    </div>
                                

                </div>
                            

                <div className="conversation">
                    <div className="head">
                        <div className="chat_avatar">
                            <img src="images/notification_head5.png" alt="Notification avatar" />
                        </div>

                        <div className="name_time">
                            <div>
                                <h4>Codepoet</h4>
                                <p>Mar 2, 2019 at 2:14 pm</p>
                            </div>
                            <span className="email">jonathan@domain.com</span>
                        </div>
                                    
                    </div>
                                

                    <div className="body">
                        <p>Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec
                                        vitae leo at sem lobortis porttitor.</p>
                        <div className="attachments">
                            <div className="attachment_head">
                                <p>
                                    <span className="lnr lnr-paperclip"></span> 2 Attachments</p>
                                <a href="#">
                                    <span className="lnr lnr-download"></span> Download</a>
                            </div>

                            <div className="attachment">
                                <ul>
                                    <li>
                                        <a href="images/att_av.jpg" className="venobox">
                                            <img src="images/att_av.jpg" alt="image attachment" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="images/att_av2.jpg" className="venobox">
                                            <img src="images/att_av2.jpg" alt="image attachment" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                
                </div>
                            

            </div>
                        

            <div className="message_composer">
                            
                <div className="composer_editor" contentEditable="true" placeholder="Type message here..."></div>
                    
                <div className="btns">
                    <button className="btn send btn--sm btn--round">Reply</button>
                </div>
                            
            </div>
                        
        </div>
    </div>
);

export default Conversation;