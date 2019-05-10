import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import * as authActions from '../../actions/auth.action';


import '../../style.css';
import './Header.css';

class UserDropbox extends Component {
  render() {
    return (
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
                  <span className="lnr lnr-home"></span>Dashboard</a>
              </li>
              <li>
                <a onClick={() => this.props.logout(this.props.user.id)}>
                  <span className="lnr lnr-exit"></span>Logout</a>
              </li>

            </ul>
          </div>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

const mapDispatchToProps = dispatch => ({
    logout: (userId) => dispatch(authActions.logOutUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropbox);
