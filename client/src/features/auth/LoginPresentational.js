import React from 'react';


import './auth.css'

const LoginPresentational = (props) => {
    
    return (
        <div className="auth-page">    
            <div className="auth-container">
     
                    <form className="auth-form" onSubmit={props.handleOnSubmit}>
                        <h3 className="auth-title">Digital Closet</h3>
                        <input className="auth-input-field" type='email' placeholder="email" onChange={props.handleChangeEmail} value={props.email} />
                        <br/>
                        <input className="auth-input-field" type='password' placeholder="password" onChange={props.handleChangePW} value={props.password}/>
                        <br/>
                        <button className="auth-button auth-submit" type="submit">Login</button>
                        <button className="auth-button auth-create" type="button" onClick={props.handleOnClick}>Create New Account</button>
                    </form>

            </div>
        </div>
    )
}

export default LoginPresentational;