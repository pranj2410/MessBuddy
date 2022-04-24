import React from 'react'
import NavBar from './NavBar'
import './Menu.css'
import User from'../user.jpg'

function Menu() {
  return (
    <div className='ContainerMenu'>
      <div className='BackgroundHeader'>
      <div style={{position: "absolute", left: "37%"}}>Mess Food</div>
        <img style={{position: "absolute", left: "61%"}} src={User} className="User"/>
        <div style={{position: "absolute", left: "40%", top: "25%"}}><span style={{textDecoration: "underline", textDecorationColor: "red", textDecorationThickness:".1rem"}}>Active</span></div>
        <div style={{position: "absolute", left: "55%", top: "25%"}}>Previous</div>
      </div>
      <div className='ProductCart'>
        <span >Dinner</span>
        <span>9 PM</span>
        <button className='OptOut'>Opt Out</button>
      </div>
      <NavBar/>
    </div>
  )
}

export default Menu