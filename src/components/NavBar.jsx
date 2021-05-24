import React, { useState } from "react"
import "./navBar.css"
import { menu, navItems } from "../menu"
import { Link } from "gatsby"
import useIsInViewport from "use-is-in-viewport"

export default function NavBar(props) {
  const { navOpen, setNavOpen } = props
  const [isInViewport, navRef] = useIsInViewport() // !isInViewport means it should be shown
  const changeBurgerState = () => {
    setNavOpen(!navOpen)
  }
  console.log(isInViewport)
  return (
    <div ref={navRef}>
      {!isInViewport && (
        <>
          <div
            id="nav-icon2"
            onClick={() => changeBurgerState()}
            className={navOpen === true ? "open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {navOpen && (
            <div className="nav-dropdown">
              <ul style={{ marginLeft: 0 }}>
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
        </>
      )}
    </div>
  )
}
