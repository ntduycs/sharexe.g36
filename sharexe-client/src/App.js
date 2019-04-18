import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';

import Router from './router';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router isAuthenticated={this.props.isAuthenticated}/>
        );
    }
}

const mapStateToProps = ({ auth: { isAuthenticated }}) => ({ isAuthenticated });

export default connect(mapStateToProps)(App);
=======
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
>>>>>>> 43bad1f9170cb6b862cc3c23075e09b31ff382eb
