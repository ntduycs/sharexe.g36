import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginPage.css';

import LoginCarousel from './LoginCarousel';
import LoginForm from './LoginForm';

class LoginPage extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <section className="login-block">
                <div className="login-container container">
                    <div className="row">
                        <LoginForm />
                        <LoginCarousel />
                    </div>
                </div>
            </section>

        );
    }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

export default connect(mapStateToProps)(LoginPage);