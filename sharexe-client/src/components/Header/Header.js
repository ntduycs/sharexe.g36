import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SmallCardifyMessage from '../SmallCardifyMessage/SmallCardifyMessage';

import * as authActions from '../../actions/auth.action';

import '../../style.css';
import './Header.css';
import NotificationDropbox from './NotificationDropbox';

class Header extends Component {
    constructor(props) {
        super(props);
        this.smallCardifyMessage = React.createRef();
    }

    render() {
        return (
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
                                                <NotificationDropbox />
                                            </li>

                                            <li className="has_dropdown" onMouseEnter={() => this.smallCardifyMessage.current.fetchMessages()}>
                                                <div className="icon_wrap">
                                                    <span className="lnr lnr-envelope"></span>
                                                </div>

                                                <div className="dropdowns messaging--dropdown">
                                                    <div className="dropdown_module_header">
                                                        <h4>My Messages</h4>
                                                        <Link to="/messages">View All</Link>
                                                    </div>

                                                    <SmallCardifyMessage ref={this.smallCardifyMessage} user={this.props.user} />

                                                </div>
                                            </li>

                                        </ul>
                                    </div>

                                    <Link to="/information">
                                        <div className="author-author__info inline has_dropdown">
                                            <div className="author__avatar">
                                                <img src="images/usr_avatar.png" alt="user avatar" />
                                            </div>
                                            <div className="autor__info">
                                                <p className="name">
                                                    {this.props.user && this.props.user.id} + {this.props.user && this.props.user.username}
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
                                                    <li>
                                                        <a onClick={() => this.props.logout(this.props.user.id)}>
                                                            <span className="lnr lnr-home"></span> Logout</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
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
                                                <a href="all-products-list.html">about us</a>
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
    }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = dispatch => ({
    logout: (userId) => dispatch(authActions.logOutUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);