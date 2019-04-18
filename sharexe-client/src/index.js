import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import createStore from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

Modal.setAppElement("#root");

ReactDOM.render(
    <Provider store={createStore()}>
        < App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
>>>>>>> 43bad1f9170cb6b862cc3c23075e09b31ff382eb
serviceWorker.unregister();
