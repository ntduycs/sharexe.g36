import React from 'react';

const Conversation = (props) => (
    <div class="col-lg-7">
        <div class="chat_area cardify">
            <div class="chat_area--title">
                <h3>Message with &nbsp;<span class="name">Codepoet</span>
                </h3>
                <div class="message_toolbar">
                    <button style={{background: 'none', outline: 'none', border: 0}} id="drop1" class="dropdown-trigger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="images/menu_icon.png" class="dropdown-trigger" alt="Menu icon" />
                    </button>

                    <ul class="custom_dropdown dropdown-menu" aria-labelledby="drop1">
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
                        

            <div class="chat_area--conversation">
                <div class="conversation">
                    <div class="head">
                        <div class="chat_avatar">
                            <img src="images/notification_head5.png" alt="Notification avatar" />
                        </div>

                        <div class="name_time">
                            <div>
                                <h4>Codepoet</h4>
                                <p>Mar 2, 2019 at 2:14 pm</p>
                            </div>
                            <span class="email">jonathan@domain.com</span>
                        </div>
                                    
                    </div>
                                

                    <div class="body">
                        <p>Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec
                            vitae leo at sem lobortis porttitor eu conse quat risus. Mauris sed congue orci.
                                        Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue.</p>
                    </div>
                                

                </div>
                            

                <div class="conversation">
                    <div class="head">
                        <div class="chat_avatar">
                            <img src="images/notification_head4.png" alt="Notification avatar" />
                        </div>

                        <div class="name_time">
                            <div>
                                <h4>AazzTech</h4>
                                <p>Mar 2, 2019 at 2:14 pm</p>
                            </div>
                            <span class="email">Me</span>
                        </div>
                                    
                    </div>
                                

                    <div class="body">
                        <p>Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec
                            vitae leo at sem lobortis porttitor eu conse quat risus. Mauris sed congue orci.
                                        Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue.</p>
                    </div>
                                

                </div>
                            

                <div class="conversation">
                    <div class="head">
                        <div class="chat_avatar">
                            <img src="images/notification_head5.png" alt="Notification avatar" />
                        </div>

                        <div class="name_time">
                            <div>
                                <h4>Codepoet</h4>
                                <p>Mar 2, 2019 at 2:14 pm</p>
                            </div>
                            <span class="email">jonathan@domain.com</span>
                        </div>
                                    
                    </div>
                                

                    <div class="body">
                        <p>Faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec
                                        vitae leo at sem lobortis porttitor.</p>
                        <div class="attachments">
                            <div class="attachment_head">
                                <p>
                                    <span class="lnr lnr-paperclip"></span> 2 Attachments</p>
                                <a href="#">
                                    <span class="lnr lnr-download"></span> Download</a>
                            </div>

                            <div class="attachment">
                                <ul>
                                    <li>
                                        <a href="images/att_av.jpg" class="venobox">
                                            <img src="images/att_av.jpg" alt="image attachment" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="images/att_av2.jpg" class="venobox">
                                            <img src="images/att_av2.jpg" alt="image attachment" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                
                </div>
                            

            </div>
                        

            <div class="message_composer">
                            
                <div class="composer_editor" contenteditable="true" placeholder="Type message here..."></div>
                    
                <div class="btns">
                    <button class="btn send btn--sm btn--round">Reply</button>
                </div>
                            
            </div>
                        
        </div>
    </div>
);

export default Conversation;