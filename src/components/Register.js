import React from 'react'
import logo from '../messlogo.jpg';
import './Register.css'

function Register() {
  return (
    <>
      <img src={logo} className="logo"/>
      <h1 className="MessBuddy">Mess Buddy</h1>
      

      <form className="InputContainer">
        <input className="InputField" placeholder='First Name'></input>
        <input className="InputField" placeholder='Last Name'></input>
        <input className="InputField" placeholder='Your Email'></input>
        <input type ="password" className="InputField" placeholder='Password'></input>
        <button className="RegisterNow">Register Now</button>
      </form>
      <p className = "Message">Already have an account?<span className="login">Log in</span></p>    
    </>
  )
}

export default Register