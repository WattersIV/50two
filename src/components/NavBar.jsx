import React, { useState } from 'react'
import './navBar.css'
import { navItems } from '../menu'

export default function NavBar(props) {
  const { navOpen, setNavOpen } = props
  const changeBurgerState = () => {
    setNavOpen(!navOpen)
    
  }
  return (
    <>
      <div 
      id="nav-icon2"
      onClick={() => changeBurgerState()} 
      className={navOpen === true ? 'open' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {navOpen && (
        <div className='nav-dropdown'>
          <ul>
            {navItems.map((item) => {
              return (
                <li key={`item-${item.title}`} className='nav-item'>
                  {item.title}
                </li>
              )
            })}
          </ul>
        </div>
      )}
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