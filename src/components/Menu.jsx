import React from 'react'
import './menu.css'
import { menu, addons } from '../menu'


export default function Menu() {

  return (
    <>
      <h1 id='menu'>Our Menu</h1>
      <div className='menu'>
        {menu.map((section) => {
          return (
            <>
                <div className='banner'>
                  <div className='raised-title'>
                  <h2 id={`${section.title}`}>{section.title}</h2>
                </div>
                </div>
              <div className='menu-section'>
                {section.items.map((item, index) => {
                  return (
                    <div className='menu-item' >
                      <h3>
                        <div className='item name-price'>{item.name}{' - $'}{item.price.toFixed(2)}</div>
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
          <div className='banner'>
          <div className='raised-title'>
            <h2 id='Addons'>Addons</h2>
          </div>
          </div>
        <div id='addon-box' className='addon-section'>
          {addons.map((extra) => {
            return (
              <div className='addon-item'>
                <h3>
                  <div className='item name-price'>{extra.name}{' - $'}{extra.price.toFixed(2)}</div>
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}