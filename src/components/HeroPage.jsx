import React from 'react'
import './HeroPage.css'

export default function HeroPage () {

  return (
    <header class="header">
    <div class="logo-box">
      <img src="img/logo-white.png" alt="Logo" class="logo"/>
    </div>
    <div class="text-box">
      <h1 class="heading-primary">
        <span class="heading-primary-main">
          50 Two
        </span>
        <span class="heading-primary-sub">
          Breakfast {'&'} Lunch
        </span>
      </h1>
      <a href="#" class="btn btn-white btn-animated">
        Menu
      </a>
    </div>
  </header>
  )
}