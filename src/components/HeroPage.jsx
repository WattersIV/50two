import React from 'react'
import { Link } from 'gatsby'
import './HeroPage.css'

export default function HeroPage () {

  return (
    <header className="header">
    <div className="logo-box">
      <img src="img/logo-white.png" alt="Logo" class="logo"/>
    </div>
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">
          50 Two
        </span>
        <span className="heading-primary-sub">
          Breakfast {'&'} Lunch
        </span>
      </h1>
      <Link to="#menu" className="btn btn-white btn-animated">
        Menu
      </Link>
    </div>
  </header>
  )
}