import React from 'react'
import './Login.css'
import { FaUser,FaLock } from "react-icons/fa";

const LoginFrom = () => {
  return (
    <div className='wrapper'>
      <h1>Login</h1>
       <div className="input-box">
        <input type='text' placeholder='Username' required/>
        <FaUser className='icon' />
       </div>
       <div className="input-box">
        <input type='password' placeholder='Password' required/>
        <FaLock className='icon' />

        </div>
        <div className="remember-forgot">
            <label><input type='checkbox' />Remeber me</label>
           <a href='#'>Forget password</a>
        </div>
        <br/>
        <button type='submit'>Login</button>
        <div className='submit'>
            
            <p>Dont't have  an accout?<a href='#'></a>Resgister</p>
        </div>
    </div>
  )
}

export default LoginFrom