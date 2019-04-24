import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as authActions from '../../actions/auth.action';

import './LoginPage.css';

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    }

    onFieldChanged = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.loginUser(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <form onSubmit={this.onFormSubmit}>

                Username
                <input name="username" value={this.state.username} onChange={this.onFieldChanged} />
                <br />
                Password
                <input name="password" value={this.state.password} onChange={this.onFieldChanged} />
                <br />
                <button type="submit">Login</button>

                
            </form>
        );
    }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

const mapDispatchToProps = dispatch => ({
    loginUser: (username, password) => dispatch(authActions.logInUser(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);