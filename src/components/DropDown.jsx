import React from 'react'
import './dropdown.css'
import { navItems } from '../menu'

export default function DropDown () {

  return (
    <div className='dropdown-wrapper'>
      <ul style={{ marginLeft: 0 }}>
        {navItems.map((item) => {
          <h2>
            {item.title}
          </h2>
        })}

      </ul>
    </div>
  )
}