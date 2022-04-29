import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../messlogo.jpg';
import './LogIn.css'

function LogIn() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <>
      <img src={logo} className="logo"/>
      <h1 className="MessBuddy">Mess Buddy</h1>
      

      <form className="InputContainer">
        <input className="InputField" placeholder='Userame or email'></input>
        <input type ="password" className="InputField" placeholder='Password'></input>
        <button className="LogIn">Log in</button>
      </form>
      <p className = "Message">Create new account<span onClick={ handleClick } className="register"> register</span></p>    
    </>
  )
}

export default LogIn