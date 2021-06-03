import React, { useState, useEffect } from "react"
import "./navBar.css"
import { menu, navItems, menuDropDownItems, storeDropDownItems, navItemsDesktop } from "../menu"
import { Link } from "gatsby"
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined"
import MenuIcon from "@material-ui/icons/Menu"
import ClearIcon from '@material-ui/icons/Clear';

export default function NavBar(props) {
  const { navOpen, setNavOpen } = props
  const [menuDropdown, setMenuDropDown] = useState(false) 
  const [storeDropdown, setStoreDropDown] = useState(false)
  const size = useWindowSize()
  const changeBurgerState = () => {
    setNavOpen(!navOpen)
  }
  return (
    <div >
          {size.width >= 1000 ? (
            <div className='large-nav'>
              <div 
              className='large-nav__item large-nav__list--item0'
              onMouseEnter={() => setMenuDropDown(true)} 
              >
                Menu
            {menuDropdown && (
              <div className='menu-dropdown'>
                <ul
                style={{ margin: 0 }}
                onMouseLeave={() => setMenuDropDown(false)}
                >
                  {menuDropDownItems.map((item) => {
                    const location = `/#${item.title}`
                    return (
                      <Link to={location}>
                      <li key={`item-${item.title}`} className="menu-dropdown__item">
                        {item.title}
                      </li>
                    </Link>
                    )
                  })}
                </ul>
              </div>
            )}
            </div>
            
            {navItemsDesktop.map((item, index) => {
              const location = `/#${item.title}`
              return (
                <Link to={location} className={`large-nav__item large-nav__list--item${index + 1}`} key={`item-${item.title}`} >
                  {item.title}
                </Link>
              )
            })}
            <div 
              className='large-nav__item large-nav__list--item3'
              onMouseEnter={() => setStoreDropDown(true)} 
              >
                Store
            {storeDropdown && (
              <div className='store-dropdown'>
                <ul
                style={{ margin: 0 }}
                onMouseLeave={() => setStoreDropDown(false)}
                >
                  {storeDropDownItems.map((item) => {
                    const location = item === 'Store Details' ? 
                    '/store-details' :
                    `/store-details#${item.title}` 
                    return (
                      <Link to={location}>
                      <li key={`item-${item.title}`} className="menu-dropdown__item">
                        {item.title}
                      </li>
                    </Link>
                    )
                  })}
                </ul>
              </div>
            )}
            </div>
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
                <ul style={{ margin: 0 }}>
                  {navItems.map(item => {
                    const location = item.location
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