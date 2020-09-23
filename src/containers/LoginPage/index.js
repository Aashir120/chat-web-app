import React from 'react';
import { useState, useEffect } from "react";
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';
import { signin, isLoggedInUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    // useEffect(()=>{
    //     if(!auth.Authenticated){
    //         dispatch(isLoggedInUser());
    //     }
    // },[]);

    const userLogin = (e) => {
        e.preventDefault();

        if (email == "") {
            alert("Email is Required!");
            return;
        }
        if (password == "") {
            alert("Email is Required!");
            return;
        }

        dispatch(signin({ email, password }));


    }
    if (auth.authenticated) {
        return <Redirect to = "/" / >
    }

    return ( <
        Layout >
        <
        div className = "loginContainer" >
        <
        Card >
        <
        form onSubmit = { userLogin } >
        <
        h3 className = "headingLog" > Log In < /h3> <
        input name = "email"
        type = "text"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        placeholder = "Email" / >
        <
        input name = "password"
        type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        placeholder = "Password" / >
        <
        div >
        <
        button > LogIn < /button> <
        /div> <
        /form> <
        /Card> <
        /div> <
        /Layout>

    )

}

export default LoginPage