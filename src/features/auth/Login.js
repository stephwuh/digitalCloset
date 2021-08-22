import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'             //will hold information about the previous page you were on
import axios from 'axios';

import LoginPresentational from './LoginPresentational.js'
import './auth.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory()

    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleChangePW = (e) =>{
        setPassword(e.target.value)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        let loginInfo = {
            email: email,
            password: password
        }
        try {
            let response = await axios.post("/api/auth/login", loginInfo)
            console.log(response.data)
            sessionStorage.setItem('userId', response.data.userId)
            sessionStorage.setItem('gender', response.data.gender)
            history.push('/closet');
            
            setEmail("")
            setPassword("")
            
            window.location.reload()

           
        } catch (error) {
            console.log(error.response)
        }

    }

    const handleOnClick=()=>{
        history.push('/signup');
    }

    return (
        <LoginPresentational 
            handleChangeEmail={handleChangeEmail}
            handleChangePW={handleChangePW}
            handleOnSubmit={handleOnSubmit}
            handleOnClick={handleOnClick}
            email={email}
            password={password}
        />
    )
}

export default Login;