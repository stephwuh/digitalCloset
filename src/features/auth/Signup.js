import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './auth.css'
import SignupPresentational from './SignupPresentational';

const Signup = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("")
    let history = useHistory()


    const handleChangeFirst = (e) =>{
        setFirst(e.target.value);
    }
    const handleChangeLast = (e) =>{
        setLast(e.target.value);
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleChangeGender = (e) =>{
        setGender(e.target.value)
    }

    const handleChangePW = (e) =>{
        setPassword(e.target.value);
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let signupInfo = {
            firstName: first,
            lastName: last,
            email: email,
            password: password,
            gender: gender
        }
        try {
            let response = await axios.post("/api/auth/signup", signupInfo);
            
            sessionStorage.setItem('userId', response.data.userId)
            sessionStorage.setItem('gender', response.data.gender)

            history.push('/closet');

            setFirst("")
            setLast("")
            setEmail("")
            setPassword("")
            setGender("")
        } catch (error) {
            console.log(error.response)
        }
        
    }

    return (
        <SignupPresentational
            handleChangeFirst={handleChangeFirst}
            handleChangeLast={handleChangeLast}
            handleChangeEmail={handleChangeEmail}
            handleChangePW={handleChangePW}
            handleOnSubmit={handleOnSubmit}
            handleChangeGender={handleChangeGender}
            first={first}
            last={last}
            email={email}
            password={password}
            gender={gender}
        />
    )
}

export default Signup;