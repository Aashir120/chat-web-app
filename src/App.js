import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';

function App() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.Authenticated) {
            dispatch(isLoggedInUser());
        }
    }, []);
    return ( <
        div className = "App" >
        <
        Router > { /*only logged in user can access this home route*/ }

        <
        PrivateRoute path = "/"
        exact component = { HomePage }
        /> <
        Route path = "/login"
        component = { LoginPage }
        /> <
        Route path = "/signup"
        component = { RegisterPage }
        /> <
        /Router> <
        /div>
    );
}

export default App;