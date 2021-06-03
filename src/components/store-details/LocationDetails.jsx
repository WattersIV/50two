import React from 'react'
import './locationDetails.css'
import { Link } from "gatsby"
import PhoneIcon from '@material-ui/icons/Phone';
import { storeHours } from '../menu'

export default function LocationDetails() {
  
  return (
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
        <PhoneIcon style={{ marginBottom: '-5px' }} />
        {' '}
        <h3 style={{ display: 'inline' }}>(613) 723-2272</h3>
      </div>
      <div className='location__phone'>
        <h2>HOURS</h2>
        {storeHours.map((item) => {
          const hours = item.isOpen ? `${item.startHour} - ${item.endHour}` : 'CLOSED'
          return (
            <div>
              <h3 key={item.day} className='location__hours--item location__hours--day'>
                {item.day} {' '}
              </h3>
              <h3 key={item.day} className='location__hours--item'>
                {hours}
              </h3>
            </div>
          )
        })}
      </div>
      <Link to='/#menu'>
        <button className='button menu-button'>
          See Menu
      </button>
      </Link>
    </div>
  )
}