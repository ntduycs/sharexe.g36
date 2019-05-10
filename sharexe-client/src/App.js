import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from './router';

import * as authActions from './actions/auth.action';

class App extends Component {
    state = {
        isLoading: true
    }

    componentDidMount = () => {
        window.onunload = () => {
            if (this.props.isAuthenticated) {
                this.props.logout(this.props.user.id, true);
            }
        }
    }

    componentWillMount = () => {
        this.props.getMe(this.finishLoading);
    }

    finishLoading = () => {
        this.setState({ isLoading: false });
    }

    render() {
        return this.state.isLoading ? null : (
            <Router isAuthenticated={this.props.isAuthenticated}/>
        );
    }
}

const mapStateToProps = ({ auth: { isAuthenticated, user } }) => ({ isAuthenticated, user });

const mapDispatchToProps = dispatch => ({
    getMe: async (finishLoading) => {
        await dispatch(authActions.getMe());
        finishLoading();
    },
    logout: (userId, isClosed) => dispatch(authActions.logOutUser(userId, isClosed))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
