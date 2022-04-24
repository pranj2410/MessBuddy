import React from 'react'
import './NavBar.css'
import Home from '../Home.png'
import Book from '../book.png'
import Feedback from '../Feedback.png'

function NavBar() {
  return (
    <div className='Container'>
        <img src={Book} className='Book'/>
        <img src={Home} className='Home'/>
        <img src={Feedback} className='Feedback'/>
    </div>
  )
}

export default NavBar