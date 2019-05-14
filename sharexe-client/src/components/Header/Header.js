import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './Header.css';

import NotificationDropbox from './NotificationDropbox';
import MainMenu from './MainMenu';
import HeaderMobile from './HeaderMobile'; 
import MessageDropbox from './MessageDropbox';
import UserDropbox from './UserDropbox';

import * as authActions from '../../actions/auth.action';

class Header extends Component {

    render() {
        return (
            <div className="menu-area">
                <div className="top-menu-area">
                    <div className="container">
                        <div className="row">
                            {/** Logo area*/}
                            <div className="col-lg-3 col-md-3 col-6 v_middle">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="images/logo-carpooling.png" alt="logo image" className="img-fluid logo-style" />
                                    </Link>
                                </div>
                            </div>
                            {/** End Logo area*/}

                            <div className="col-lg-8 offset-lg-1 col-md-9 col-6 v_middle">

                                <div className="author-area">

                                    <div className="author__notification_area">
                                        <ul>                                        
                                            <NotificationDropbox />                                       
                                            <MessageDropbox/>
                                        </ul>
                                    </div>

                                    <UserDropbox/>

                                </div>

                                <HeaderMobile/>

                            </div>

                        </div>

                    </div>

                </div>

                <MainMenu/>
            </div>
        );
    }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = dispatch => ({
    logout: (userId) => dispatch(authActions.logOutUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);