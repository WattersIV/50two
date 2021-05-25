import React, { useState } from "react"
import "./navBar.css"
import { menu, navItems } from "../menu"
import { Link } from "gatsby"
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined"
import MenuIcon from "@material-ui/icons/Menu"
import useIsInViewport from "use-is-in-viewport"

export default function NavBar(props) {
  const { navOpen, setNavOpen } = props
  const [isInViewport, navRef] = useIsInViewport() // !isInViewport means it should be shown
  const changeBurgerState = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div ref={navRef}>
      {!isInViewport && (
        <div className="navbar">
          {/* Add onclick for phone to open phone on mobile if possible
          If not possible open a dialog with phone number and hrs */}
          {!navOpen && (
            <>
              <PhoneInTalkOutlinedIcon id="navbar-phone" />
              <h1 id="nav-fifty-two">50 TWO</h1>
              <MenuIcon
                id="hamburger-icon"
                onClick={() => changeBurgerState()}
              />
            </>
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
      )}
    </div>
  )
}
