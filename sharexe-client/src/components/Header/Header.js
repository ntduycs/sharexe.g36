import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => (
    <div className="menu-area">
        
        <div className="top-menu-area">
            
            <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-3 col-md-3 col-6 v_middle">
                        <div className="logo">
                            <Link to="/">
                                <img src="images/logo-carpooling.png" alt="logo image" className="img-fluid logo-style" />
                            </Link>
                        </div>
                    </div>
                    

                    
                    <div className="col-lg-8 offset-lg-1 col-md-9 col-6 v_middle">
                        
                        <div className="author-area">

                            <div className="author__notification_area">
                                <ul>
                                    <li className="has_dropdown">
                                        <div className="icon_wrap">
                                            <span className="lnr lnr-alarm"></span>
                                            <span className="notification_count noti">2</span>
                                        </div>

                                        <div className="dropdowns notification--dropdown">

                                            <div className="dropdown_module_header">
                                                <h4>My Notifications</h4>
                                            </div>

                                            <div className="notifications_module">
                                                <div className="notification">
                                                    <div className="notification__info">
                                                        <div className="info_avatar">
                                                            <img src="images/notification_head5.png" alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <div>
                                                                <p><span>Khamoka Smith</span> has just allowed you to join his ride</p>
                                                                <p><a href="#">Ride detail</a></p>
                                                            </div>
                                                            <p className="time">Just now</p>
                                                        </div>
                                                    </div>
                                                    

                                  
                                                    
                                                </div>

                                             <div className="notification">
                                                    <div className="notification__info">
                                                        <div className="info_avatar">
                                                            <img src="images/notification_head6.png" alt="" />
                                                        </div>
                                                        <div className="info">
                                                            <div>
                                                                <p className="thanglozviettemplatengunhucho"><span>John</span> wants to join your ride</p>
                                                                <p><a href="#">Ride detail</a></p>
                                                            </div>
                                                            <p className="time">1 minute ago</p>
                                                        </div>
                                                    </div>
                                                    

                                  
                                                    
                                                </div>                                                
                                                
                                            </div>
                                            
                                        </div>
                                    </li>

                                    <li className="has_dropdown">
                                        <div className="icon_wrap">
                                            <span className="lnr lnr-envelope"></span>
                                            <span className="notification_count msg">3</span>
                                        </div>

                                        <div className="dropdowns messaging--dropdown">
                                            <div className="dropdown_module_header">
                                                <h4>My Messages</h4>
                                                <Link to="/messages">View All</Link>
                                            </div>

                                            <div className="messages">

                                                <a href="message.html" className="message">
                                                    <div className="message__actions_avatar">
                                                        <div className="avatar">
                                                            <img src="images/notification_head4.png" alt="" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div className="message_data">
                                                        <div className="name_time">
                                                            <div>
                                                            
                                                                <div className="name">
                                                                    <p>Tim Cook</p>
                                                                </div>

                                                                <div className="time">Just now</div>
                                                            </div>
                                                            <p>Could I join your ride?</p>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                                

                                                <a href="message.html" className="message">
                                                    <div className="message__actions_avatar">
                                                        <div className="avatar">
                                                            <img src="images/notification_head2.png" alt="" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div className="message_data">
                                                        <div className="name_time">
                                                            <div>
                                                            
                                                                <div className="name">
                                                                    <p>Alice Lisa</p>
                                                                </div>

                                                                <div className="time">1min</div>
                                                            </div>
                                                            <p>Can I take my pet?</p>
                                                        </div>
                                                    </div>
                                                    
                                                </a>
                                                

                                                <a href="message.html" className="message">
                                                    <div className="message__actions_avatar">
                                                        <div className="avatar">
                                                            <img src="images/notification_head5.png" alt="" />
                                                        </div>
                                                    </div>
                                                    

                                                    <div className="message_data">
                                                        <div className="name_time">
                                                            <div>
                                                            
                                                                <div className="name">
                                                                    <p>Bob Smith</p>
                                                                </div>

                                                                <div className="time">12h</div>
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
                            

                            
                            <div className="author-author__info inline has_dropdown">
                                <div className="author__avatar">
                                    <img src="images/usr_avatar.png" alt="user avatar" />

                                </div>
                                <div className="autor__info">
                                    <p className="name">
                                        Duy Nguyen
                                    </p>
                                    <p className="ammount">$20.45</p>
                                </div>

                                <div className="dropdowns dropdown--author">
                                    <ul>
                                        <li>
                                            <a href="author.html">
                                                <span className="lnr lnr-user"></span>Profile</a>
                                        </li>
                                        <li>
                                            <a href="dashboard.html">
                                                <span className="lnr lnr-home"></span> Dashboard</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        

                        
                        <div className="mobile_content ">
                            <span className="lnr lnr-user menu_icon"></span>

                            
                            <div className="offcanvas-menu closed">
                                <span className="lnr lnr-cross close_menu"></span>
                                <div className="author-author__info">
                                    <div className="author__avatar v_middle">
                                        <img src="images/usr_avatar.png" alt="user avatar" />
                                    </div>
                                    <div className="autor__info v_middle">
                                        <p className="name">
                                            Jhon Doe
                                        </p>
                                        <p className="ammount">$20.45</p>
                                    </div>
                                </div>
                                

                                <div className="author__notification_area">
                                    <ul>
                                        <li>
                                            <a href="notification.html">
                                                <div className="icon_wrap">
                                                    <span className="lnr lnr-alarm"></span>
                                                    <span className="notification_count noti">25</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="message.html">
                                                <div className="icon_wrap">
                                                    <span className="lnr lnr-envelope"></span>
                                                    <span className="notification_count msg">6</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="cart.html">
                                                <div className="icon_wrap">
                                                    <span className="lnr lnr-cart"></span>
                                                    <span className="notification_count purch">2</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                

                                <div className="dropdowns dropdown--author">
                                    <ul>
                                        <li>
                                            <a href="author.html">
                                                <span className="lnr lnr-user"></span>Profile</a>
                                        </li>
                                        <li>
                                            <a href="dashboard.html">
                                                <span className="lnr lnr-home"></span> Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-setting.html">
                                                <span className="lnr lnr-cog"></span> Setting</a>
                                        </li>
                                        <li>
                                            <a href="cart.html">
                                                <span className="lnr lnr-cart"></span>Purchases</a>
                                        </li>
                                        <li>
                                            <a href="favourites.html">
                                                <span className="lnr lnr-heart"></span> Favourite</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-add-credit.html">
                                                <span className="lnr lnr-dice"></span>Add Credits</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-statement.html">
                                                <span className="lnr lnr-chart-bars"></span>Sale Statement</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-upload.html">
                                                <span className="lnr lnr-upload"></span>Upload Item</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-manage-item.html">
                                                <span className="lnr lnr-book"></span>Manage Item</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-withdrawal.html">
                                                <span className="lnr lnr-briefcase"></span>Withdrawals</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="lnr lnr-exit"></span>Logout</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center">
                                    <a href="signup.html" className="author-area__seller-btn inline">Become a Seller</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

        
        <div className="mainmenu">
            
            <div className="container">
                
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="navbar-header">
                            
                            <div className="mainmenu__search">
                                <form action="#">
                                    <div className="searc-wrap">
                                        <input type="text" placeholder="Search here ..." />
                                        <button type="submit" className="search-wrap__btn">
                                            <span className="lnr lnr-magnifier"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>

                        <nav className="navbar navbar-expand-md navbar-light mainmenu__menu">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="has_dropdown">
                                        <a href="index.html">HOME</a>
                                        <div className="dropdowns dropdown--menu">
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
                                    <li className="has_dropdown">
                                        <a href="all-products-list.html">offer</a>
                                        <div className="dropdowns dropdown--menu">
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
                                    <li className="has_dropdown">
                                        <a href="#">book</a>
                                        <div className="dropdowns dropdown--menu">
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
                                    <li className="has_megamenu">
                                        <a href="#">profile</a>
                                        <div className="dropdown_megamenu contained">
                                            <div className="megamnu_module">
                                                <div className="menu_items">
                                                    <div className="menu_column">
                                                        <ul>
                                                            <li>
                                                                <a href="accordion.html">Accordion</a>
                                                            </li>
                                                            <li>
                                                                <a href="alert.html">Alert</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="menu_column">
                                                        <ul>
                                                            <li>
                                                                <a href="features.html">Features</a>
                                                            </li>
                                                            <li>
                                                                <a href="footer.html">Footer</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="menu_column">
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
                                    <li className="has_megamenu">
                                        <a href="#">about us</a>
                                        <div className="dropdown_megamenu">
                                            <div className="megamnu_module">
                                                <div className="menu_items">
                                                    <div className="menu_column">
                                                        <ul>
                                                            <li className="title">Product</li>
                                                            <li>
                                                                <a href="all-products.html">Products Grid</a>
                                                            </li>
                                                            <li>
                                                                <a href="all-products-list.html">Products List</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="menu_column">
                                                        <ul>
                                                            <li className="title">Author</li>
                                                            <li>
                                                                <a href="author.html">Author Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="author-items.html">Author Items</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="menu_column">
                                                        <ul>
                                                            <li className="title">Dashboard</li>
                                                            <li>
                                                                <a href="dashboard.html">Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-setting.html">Account Settings</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="menu_column">
                                                        <ul>
                                                            <li className="title">Customers</li>
                                                            <li>
                                                                <a href="support-forum.html">Support Forum</a>
                                                            </li>
                                                        </ul>

                                                        <ul>
                                                            <li className="title">Blog</li>
                                                            <li>
                                                                <a href="blog1.html">Blog V-1</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="menu_column">
                                                        <ul>
                                                            <li className="title">Other</li>
                                                            <li>
                                                                <a href="how-it-works.html">How It Works</a>
                                                            </li>
                                                            <li className="has_badge">
                                                                <a href="badges.html">Badges</a>
                                                                <span className="badge">New</span>
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