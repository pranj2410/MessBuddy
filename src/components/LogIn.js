import React from 'react'
import logo from '../messlogo.jpg';
import './LogIn.css'

function LogIn() {
  return (
    <>
      <img src={logo} className="logo"/>
      <h1 className="MessBuddy">Mess Buddy</h1>
      

      <form className="InputContainer">
        <input className="InputField" placeholder='Userame or email'></input>
        <input type ="password" className="InputField" placeholder='Password'></input>
        <button className="LogIn">Log in</button>
      </form>
      <p className = "Message">Create new account</p>    
    </>
  )
}

export default LogIn