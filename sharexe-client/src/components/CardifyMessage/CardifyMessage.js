import React from 'react';

const CardifyMessage = (props) => (
    <div class="col-lg-5">
        <div class="cardify messaging_sidebar">
            <div class="messaging__header">
                <div class="messaging_menu">
                    <span id="drop2" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span class="lnr lnr-inbox"></span>Inbox<span class="msg">6</span>
                    </span>
                </div>
                            
                <div class="messaging_action">
                    <button href="message-compose.html" class="btn btn--round btn--sm">
                        <span class="lnr lnr-pencil"></span>
                        <span class="text">Compose</span>
                    </button>
                </div>
                            
            </div>
                        

            <div class="messaging__contents">
                <div class="message_search">
                    <input type="text" placeholder="Search messages..." />
                    <span class="lnr lnr-magnifier"></span>
                </div>

                {/* Being recent contacts */}
                <div class="messages">
                    {/* Begin recent contact item */}
                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch2" />
                                    <label for="ch2">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="avatar">
                                <img src="images/notification_head4.png" alt="" />
                            </div>
                        </div>

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>NukeThemes</p>
                                    <span class="lnr lnr-envelope"></span>
                                </div>

                                <span class="time">Just now</span>
                                <p style = {
                                    {
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }
                                }> lmao kaka lmao kaka lmao kaka lmao kaka lmao kaka </p>
                            </div>
                        </div>     
                    </div>
                    {/* End recent contact item*/}
                                
                    {/* Begin active recent contact */}
                    <div class="message active">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch2" />
                                    <label for="ch2">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head5.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>Crazy Coder</p>
                                    <span class="lnr lnr-envelope"></span>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>       
                    </div>
                    {/* End active recent contact */}

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch3" />
                                    <label for="ch3">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head6.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>Hybrid Insane</p>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch4" />
                                    <label for="ch4">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head3.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>ThemeXylum</p>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch5" />
                                    <label for="ch5">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head4.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>NukeThemes</p>
                                    <span class="lnr lnr-envelope"></span>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hello John Smith! Nunc placerat mi ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch6" />
                                    <label for="ch6">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head5.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>Crazy Coder</p>
                                    <span class="lnr lnr-envelope"></span>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch7" />
                                    <label for="ch7">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head6.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>Hybrid Insane</p>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch8" />
                                    <label for="ch8">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head3.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>ThemeXylum</p>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch9" />
                                    <label for="ch9">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head4.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>NukeThemes</p>
                                    <span class="lnr lnr-envelope"></span>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hello John Smith! Nunc placerat id ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch10" />
                                    <label for="ch10">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head5.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>Crazy Coder</p>
                                    <span class="lnr lnr-envelope"></span>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch11" />
                                    <label for="ch11">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head6.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>Hybrid Insane</p>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                

                    <div class="message">
                        <div class="message__actions_avatar">
                            <div class="actions">
                                <span class="fa fa-star-o"></span>
                                <div class="custom_checkbox">
                                    <input type="checkbox" id="ch12" />
                                    <label for="ch12">
                                        <span class="shadow_checkbox"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="avatar">
                                <img src="images/notification_head3.png" alt="" />
                            </div>
                        </div>
                                    

                        <div class="message_data">
                            <div class="name_time">
                                <div class="name">
                                    <p>ThemeXylum</p>
                                </div>

                                <span class="time">Just now</span>
                                <p>Hi! Nunc placerat mi id nisi interum ...</p>
                            </div>
                        </div>
                                    
                    </div>
                                
                </div>
                            
            </div>
                        
        </div>
                    
    </div>
);

export default CardifyMessage;