import React from 'react'
import './menu.css'
import { menu } from '../menu'
import { Link } from 'gatsby'
export default function Menu() {

  return (
    <>
      <h1 id='menu'>Our Menu</h1>
      <div className='menu'>
        {menu.map((section) => {
          return (
            <>
              <div className='menu-section'>
                <div className='raised-title'>
                  <h2 id={`${section.title}`}>{section.title}</h2>
                </div>
                {section.items.map((item, index) => {
                  return (
                    <div className='menu-item' >
                      <h3>
                        <div className='item name-price'>{item.name}{' - '}{item.price}</div>
                        <br />
                        <div className='item description'>{item.description}</div>
                      </h3>  
                    </div>
                  )
                })}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}