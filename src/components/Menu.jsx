import React from 'react'
import './menu.css'
import { menu } from '../menu'
import { Link } from 'gatsby'
export default function Menu() {

  return (
    <>
    <h1 id='menu'>Our Menu</h1>
    <div className='menu-wrapper'>
      <div className='index'>
        {menu.map((section) => {
          return (
            <Link to={`#${section.title}`}>
              <h2 className='section-title'>{section.title}</h2>
            </Link>
          )
        })}
      </div>
      <div className='menu'>
        {menu.map((section) => {
          return (
            <>
              <h3 id={`${section.title}`} className='section-title'>{section.title}</h3>
              <div>
                {section.items.map((item) => {
                  return (
                    <h4 className='menu-item'>
                      <span className='item-name'>{item.name}{' - '}</span>
                      <span className='item-price'>{item.price}</span>
                    </h4>
                  )
                })}
              </div>
            </>
          )
        })}
      </div>

    </div>
  </>
  )
}