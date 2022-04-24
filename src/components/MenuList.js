import React from 'react'
import NavBar from './NavBar'
import './MenuList.css'
import User from'../user.jpg'

function MenuList() {
  return (
    <div className='ContainerMenu'>
      <div className='BackgroundHeader'>
        <div style={{position: "absolute", left: "37%"}}>Mess Food</div>
        <img style={{position: "absolute", left: "61%"}} src={User} className="User"/>
        <div style={{position: "absolute", left: "40%", top: "25%"}}><span style={{textDecoration: "underline", textDecorationColor: "red", textDecorationThickness:".1rem"}}>Active</span></div>
        <div style={{position: "absolute", left: "55%", top: "25%"}}>Previous</div>
      </div>
        <div style={{position: "absolute", left: "37%", top: "40%"}}>
        15th Feb’ 22  
        </div>
        <ul style={{position: "absolute", left: "37%", top: "50%"}}>
            <li>Dal</li>
            <li>Roti</li>
            <li>Sabzi</li>
            <li>Raita</li>
        </ul>
      <NavBar/>
    </div>
  )
}

export default MenuList