import React, { useState } from "react"
import "./navBar.css"
import { menu, navItems } from "../menu"
import { Link } from "gatsby"
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined"
import MenuIcon from "@material-ui/icons/Menu"
import ClearIcon from '@material-ui/icons/Clear';

export default function NavBar(props) {
  const { navOpen, setNavOpen } = props
  const changeBurgerState = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div >
        <div className="navbar">
          {/* Add onclick for phone to open phone on mobile if possible
          If not possible open a dialog with phone number and hrs */}
          <Link to='/store-details' className='styled-link'>
            <PhoneInTalkOutlinedIcon id="navbar-phone" />
          </Link>
          <Link to='/#menu' className="styled-link">
            <h1 id="nav-fifty-two">50 TWO</h1>
          </Link>
          {navOpen ? (
              <ClearIcon id='nav-clear-icon' onClick={() => changeBurgerState()} />
            ) : (
            <MenuIcon
              id="hamburger-icon"
              onClick={() => changeBurgerState()}
            />
          )}
          {navOpen && (
            <div className="nav-dropdown">
              <ul style={{ margin: "15px 0 15px 0" }}>
                {navItems.map(item => {
                  const location =
                    item.title === "Store Details"
                      ? "/store-details"
                      : `/#${item.title}`
                  return (
                    <Link to={location} className="nav-item">
                      <li key={`item-${item.title}`} className="nav-item">
                        {item.title}
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
    </div>
  )
}
