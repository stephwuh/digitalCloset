import React from 'react';

import './auth.css'

const SignupPresentational = (props) => {
   

    return (
        <div className="auth-page">
            <div className="auth-container">
            
                <form className="auth-form" onSubmit={props.handleOnSubmit}>
                    <h3 className='auth-title'>Digital Closet</h3>
                    <input className="auth-input-field" type='text' placeholder='First Name' onChange={props.handleChangeFirst} value={props.first}/>
                    <br/>
                    <input className="auth-input-field" type='text' placeholder='Last Name' onChange={props.handleChangeLast} value={props.last}/>
                    <br/>

                    <select name="gender" className="auth-input-field" onChange={props.handleChangeGender} value={props.gender}>
                    <option value="" disabled selected>Gender</option>
                        <option value='men'>male</option>
                        <option value='women'>female</option>
                    </select>
                                        
                    <input className="auth-input-field" type='email' placeholder="email" onChange={props.handleChangeEmail} value={props.email} />
                    <br/>
                    <input className="auth-input-field" type='password' placeholder="password" onChange={props.handleChangePW} value={props.password}/>
                    <br/>
                    <input className="auth-button auth-submit"  type="submit" value="Join"></input>
    
                </form>
            </div>
        </div>
    )
}

export default SignupPresentational;