import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from './router';

import * as actions from './actions/auth.action';

import './App.css';

class App extends Component {
    state = {
        isLoading: true
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

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

const mapDispatchToProps = dispatch => ({
    getMe: async (finishLoading) => {
        await dispatch(actions.getMe());
        finishLoading();
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
