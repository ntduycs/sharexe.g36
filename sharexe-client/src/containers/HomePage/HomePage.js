import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as uiActions from '../../actions/ui.action';
import * as modalTypes from '../../constants/modalTypes';

import './HomePage.css';

class HomePage extends Component {

    render() {
        return (
            <div>
                Homepage

                <Link to="/messages/123">here</Link>
                <button onClick={this.props.openLoginModal}>Click me</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openLoginModal: () => dispatch(uiActions.openModal(modalTypes.LOGIN_MODAL))
});

export default connect(null, mapDispatchToProps)(HomePage);
