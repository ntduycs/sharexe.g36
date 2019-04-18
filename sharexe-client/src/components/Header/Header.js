import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => (
    <div class="menu-area">
        
        <div class="top-menu-area">
            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col-lg-3 col-md-3 col-6 v_middle">
                        <div class="logo">
                            <Link to="/">
                                <img src="images/logo-carpooling.png" alt="logo image" class="img-fluid logo-style" />
                            </Link>
                        </div>
                    </div>
                    

                    
                    <div class="col-lg-8 offset-lg-1 col-md-9 col-6 v_middle">
                        
                        <div class="author-area">

                            <div class="author__notification_area">
                                <ul>
                                    <li class="has_dropdown">
                                        <div class="icon_wrap">
                                            <span class="lnr lnr-alarm"></span>
                                            <span class="notification_count noti">2</span>
                                        </div>

                                        <div class="dropdowns notification--dropdown">

                                            <div class="dropdown_module_header">
                                                <h4>My Notifications</h4>
                                            </div>

                                            <div class="notifications_module">
                                                <div class="notification">
                                                    <div class="notification__info">
                                                        <div class="info_avatar">
                                                            <img src="images/notification_head5.png" alt="" />
                                                        </div>
                                                        <div class="info">
                                                            <p>
                                                                <p><span>Khamoka Smith</span> has just allowed you to join his ride</p>
                                                                <p><a href="#">Ride detail</a></p>
                                                            </p>
                                                            <p class="time">Just now</p>
                                                        </div>
                                                    </div>
                                                    

                                  
                                                    
                                                </div>

                                             <div class="notification">
                                                    <div class="notification__info">
                                                        <div class="info_avatar">
                                                            <img src="images/notification_head6.png" alt="" />
                                                        </div>
                                                        <div class="info">
                                                            <p>
                                                                <p class="thanglozviettemplatengunhucho"><span>John</span> wants to join your ride</p>
                                                                <p><a href="#">Ride detail</a></p>
                                                            </p>
                                                            <p class="time">1 minute ago</p>
                                                        </div>
                                                    </div>
                                                    

                                  
                                                    
                                                </div>                                                
                                                
                                            </div>
                                            
                                        </div>
                                    </li>

                                    <li class="has_dropdown">
                                        <div class="icon_wrap">
                                            <span class="lnr lnr-envelope"></span>
                                            <span class="notification_count msg">3</span>
                                        </div>

                                        <div class="dropdowns messaging--dropdown">
                                            <div class="dropdown_module_header">
                                                <h4>My Messages</h4>
                                                <Link to="/messages">View All</Link>
                                            </div>

                                            <div class="messages">

                                                <a href="message.html" class="message">
                                                    <div class="message__actions_avatar">
                                                        <div class="avatar">
                                                            <img src="images/notification_head4.png" alt="" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div class="message_data">
                                                        <div class="name_time">
                                                            <div>
                                                            
                                                                <div class="name">
                                                                    <p>Tim Cook</p>
                                                                </div>

                                                                <div class="time">Just now</div>
                                                            </div>
                                                            <p>Could I join your ride?</p>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                                

                                                <a href="message.html" class="message">
                                                    <div class="message__actions_avatar">
                                                        <div class="avatar">
                                                            <img src="images/notification_head2.png" alt="" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div class="message_data">
                                                        <div class="name_time">
                                                            <div>
                                                            
                                                                <div class="name">
                                                                    <p>Alice Lisa</p>
                                                                </div>

                                                                <div class="time">1min</div>
                                                            </div>
                                                            <p>Can I take my pet?</p>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                                

                                                <a href="message.html" class="message">
                                                    <div class="message__actions_avatar">
                                                        <div class="avatar">
                                                            <img src="images/notification_head5.png" alt="" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div class="message_data">
                                                        <div class="name_time">
                                                            <div>
                                                            
                                                                <div class="name">
                                                                    <p>Bob Smith</p>
                                                                </div>

                                                                <div class="time">12h</div>
                                                            </div>
                                                            <p>What time cound I pick you up?</p>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                                

                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            

                            
                            <div class="author-author__info inline has_dropdown">
                                <div class="author__avatar">
                                    <img src="images/usr_avatar.png" alt="user avatar" />

                                </div>
                                <div class="autor__info">
                                    <p class="name">
                                        Duy Nguyen
                                    </p>
                                    <p class="ammount">$20.45</p>
                                </div>

                                <div class="dropdowns dropdown--author">
                                    <ul>
                                        <li>
                                            <a href="author.html">
                                                <span class="lnr lnr-user"></span>Profile</a>
                                        </li>
                                        <li>
                                            <a href="dashboard.html">
                                                <span class="lnr lnr-home"></span> Dashboard</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        

                        
                        <div class="mobile_content ">
                            <span class="lnr lnr-user menu_icon"></span>

                            
                            <div class="offcanvas-menu closed">
                                <span class="lnr lnr-cross close_menu"></span>
                                <div class="author-author__info">
                                    <div class="author__avatar v_middle">
                                        <img src="images/usr_avatar.png" alt="user avatar" />
                                    </div>
                                    <div class="autor__info v_middle">
                                        <p class="name">
                                            Jhon Doe
                                        </p>
                                        <p class="ammount">$20.45</p>
                                    </div>
                                </div>
                                

                                <div class="author__notification_area">
                                    <ul>
                                        <li>
                                            <a href="notification.html">
                                                <div class="icon_wrap">
                                                    <span class="lnr lnr-alarm"></span>
                                                    <span class="notification_count noti">25</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="message.html">
                                                <div class="icon_wrap">
                                                    <span class="lnr lnr-envelope"></span>
                                                    <span class="notification_count msg">6</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="cart.html">
                                                <div class="icon_wrap">
                                                    <span class="lnr lnr-cart"></span>
                                                    <span class="notification_count purch">2</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                

                                <div class="dropdowns dropdown--author">
                                    <ul>
                                        <li>
                                            <a href="author.html">
                                                <span class="lnr lnr-user"></span>Profile</a>
                                        </li>
                                        <li>
                                            <a href="dashboard.html">
                                                <span class="lnr lnr-home"></span> Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-setting.html">
                                                <span class="lnr lnr-cog"></span> Setting</a>
                                        </li>
                                        <li>
                                            <a href="cart.html">
                                                <span class="lnr lnr-cart"></span>Purchases</a>
                                        </li>
                                        <li>
                                            <a href="favourites.html">
                                                <span class="lnr lnr-heart"></span> Favourite</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-add-credit.html">
                                                <span class="lnr lnr-dice"></span>Add Credits</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-statement.html">
                                                <span class="lnr lnr-chart-bars"></span>Sale Statement</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-upload.html">
                                                <span class="lnr lnr-upload"></span>Upload Item</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-manage-item.html">
                                                <span class="lnr lnr-book"></span>Manage Item</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-withdrawal.html">
                                                <span class="lnr lnr-briefcase"></span>Withdrawals</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="lnr lnr-exit"></span>Logout</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="text-center">
                                    <a href="signup.html" class="author-area__seller-btn inline">Become a Seller</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

        
        <div class="mainmenu">
            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col-md-12">
                        <div class="navbar-header">
                            
                            <div class="mainmenu__search">
                                <form action="#">
                                    <div class="searc-wrap">
                                        <input type="text" placeholder="Search here ..." />
                                        <button type="submit" class="search-wrap__btn">
                                            <span class="lnr lnr-magnifier"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>

                        <nav class="navbar navbar-expand-md navbar-light mainmenu__menu">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="has_dropdown">
                                        <a href="index.html">HOME</a>
                                        <div class="dropdowns dropdown--menu">
                                            <ul>
                                                <li>
                                                    <a href="index.html">Home Multi Vendor</a>
                                                </li>
                                                <li>
                                                    <a href="index-single.html">Home Two Single User</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="has_dropdown">
                                        <a href="all-products-list.html">offer</a>
                                        <div class="dropdowns dropdown--menu">
                                            <ul>
                                                <li>
                                                    <a href="all-products.html">Recent Items</a>
                                                </li>
                                                <li>
                                                    <a href="all-products.html">Popular Items</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="has_dropdown">
                                        <a href="#">book</a>
                                        <div class="dropdowns dropdown--menu">
                                            <ul>
                                                <li>
                                                    <a href="category-grid.html">Popular Items</a>
                                                </li>
                                                <li>
                                                    <a href="category-grid.html">Admin Templates</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="has_megamenu">
                                        <a href="#">profile</a>
                                        <div class="dropdown_megamenu contained">
                                            <div class="megamnu_module">
                                                <div class="menu_items">
                                                    <div class="menu_column">
                                                        <ul>
                                                            <li>
                                                                <a href="accordion.html">Accordion</a>
                                                            </li>
                                                            <li>
                                                                <a href="alert.html">Alert</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="menu_column">
                                                        <ul>
                                                            <li>
                                                                <a href="features.html">Features</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer.html">Footer</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="menu_column">
                                                        <ul>
                                                            <li>
                                                                <a href="progressbar.html">Progressbar</a>
                                                            </li>
                                                            <li>
                                                                <a href="social.html">Social</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="has_megamenu">
                                        <a href="#">about us</a>
                                        <div class="dropdown_megamenu">
                                            <div class="megamnu_module">
                                                <div class="menu_items">
                                                    <div class="menu_column">
                                                        <ul>
                                                            <li class="title">Product</li>
                                                            <li>
                                                                <a href="all-products.html">Products Grid</a>
                                                            </li>
                                                            <li>
                                                                <a href="all-products-list.html">Products List</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="menu_column">
                                                        <ul>
                                                            <li class="title">Author</li>
                                                            <li>
                                                                <a href="author.html">Author Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="author-items.html">Author Items</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="menu_column">
                                                        <ul>
                                                            <li class="title">Dashboard</li>
                                                            <li>
                                                                <a href="dashboard.html">Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-setting.html">Account Settings</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="menu_column">
                                                        <ul>
                                                            <li class="title">Customers</li>
                                                            <li>
                                                                <a href="support-forum.html">Support Forum</a>
                                                            </li>
                                                        </ul>

                                                        <ul>
                                                            <li class="title">Blog</li>
                                                            <li>
                                                                <a href="blog1.html">Blog V-1</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div class="menu_column">
                                                        <ul>
                                                            <li class="title">Other</li>
                                                            <li>
                                                                <a href="how-it-works.html">How It Works</a>
                                                            </li>
                                                            <li class="has_badge">
                                                                <a href="badges.html">Badges</a>
                                                                <span class="badge">New</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="contact.html">contact</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">faq</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </nav>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
);

export default Header;