import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth.action';

class LoginForm extends Component {
  state = {
    usernameOrEmail: '',
    password: ''
  }

  onFieldChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.usernameOrEmail, this.state.password);
  }

  render() {
    return (
      <div className="col-md-4 login-sec">
        <h2 className="text-center">Login Now</h2>
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="text-uppercase">Username/Email</label>
            <input type="text" className="form-control" name="usernameOrEmail" defaultValue={this.state.usernameOrEmail} onChange={this.onFieldChanged} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-uppercase">Password</label>
            <input type="password" className="form-control" name="password" defaultValue={this.state.password} onChange={this.onFieldChanged} />
          </div>
          <div className="form-check">
            <label className="form-check-label remember-label">
              <input type="checkbox" className="form-check-input login-input" />
              <small>Remember Me</small>
            </label>
            <button type="submit" className="btn btn-login float-right login-btn">Submit</button>
          </div>
        </form>
        <div className="copy-text">Created with <i className="fa fa-heart" /> by ShareXe Company</div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (usernameOrEmail, password) => dispatch(authActions.logInUser(usernameOrEmail, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);
