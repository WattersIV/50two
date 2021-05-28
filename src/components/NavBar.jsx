import React, { useState, useEffect } from "react"
import "./navBar.css"
import { menu, navItems } from "../menu"
import { Link } from "gatsby"
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined"
import MenuIcon from "@material-ui/icons/Menu"
import ClearIcon from '@material-ui/icons/Clear';

export default function NavBar(props) {
  const { navOpen, setNavOpen } = props
  const size = useWindowSize()
  const changeBurgerState = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div >
          {size.width >= 1000 ? (
            <div className='large-nav'>
            {navItems.map((item, index) => {
              const location =
              item.title === "Store Details"
              ? "/store-details"
              : `/#${item.title}`
              return (
                <Link to={location} className={`large-nav__item large-nav__list--item${index}`} key={`item-${item.title}`} >
                  {item.title}
                </Link>
              )
            })}
            <Link to='/#menu' className="styled-link" id='large-nav--logo'>
              <h1 id="nav-fifty-two">50 TWO</h1>
            </Link>
          </div>
          ) : (
            <>
            <div className="navbar">
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
            </>
          )}
    </div>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}