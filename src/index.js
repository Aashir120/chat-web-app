import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
    apiKey: "AIzaSyCp3E7yJdIKuFjFsdp806AJsuWeZzFd0YE",
    authDomain: "web-messenger-fdf03.firebaseapp.com",
    databaseURL: "https://web-messenger-fdf03.firebaseio.com",
    projectId: "web-messenger-fdf03",
    storageBucket: "web-messenger-fdf03.appspot.com",
    messagingSenderId: "716293596046",
    appId: "1:716293596046:web:b2d3e735d84c718c98fadf",
    measurementId: "G-3PX83PWFRT"
};
firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render( <
    Provider store = { store } >
    <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode> <
    /Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();