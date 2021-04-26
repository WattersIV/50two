import React, { useState } from 'react'
import './navBar.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const changeBurgerState = () => {
    setOpen(!open)
  }
  return (
    <>
      <div 
      id="nav-icon2"
      onClick={() => changeBurgerState()} 
      className={open === true ? 'open' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <div className='nav-container'>
        <div className='links'>
          <h2>Breakfast</h2>
          <h2>Lunch</h2>
          <h2>Store Details</h2>
        </div>
      </div> */}
    </>
  )
}