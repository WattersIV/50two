import React from 'react'
import './locationDetails.css'

export default function LocationDetails() {
  return (
    <main>
      <div className='location'>
        <div className='location__city'>
          <h1>OTTAWA, ON</h1>
        </div>
        <div className='location__address'>
          <h2>ADDRESS</h2>
          <h3>52 Antares Dr</h3>
          <h3>Nepean, ON K2E 7W6</h3>
        </div>
        <div className='location__hours'>
          <h3>(613) 723-2272</h3>
        </div>
        <div className='location__phone'>
          <h2>HOURS</h2>
          <h3>Monday-Friday 8am-3pm</h3>
        </div>
      <button className='button menu-button'>
        See Menu
      </button>
      </div>
    </main>
  )
}