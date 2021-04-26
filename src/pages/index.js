import * as React from "react"
import { useRef, useEffect, useState } from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from '../components/NavBar'
import HeroPage from '../components/HeroPage'
import Menu from '../components/Menu'
import useOffScreen from '../hooks/useOffScreen'
import Layout from "../components/layout"
import SEO from "../components/seo"
import DropDown from "../components/DropDown"

const IndexPage = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
  <Layout>
    <SEO title="Home" />
    <body>
      <HeroPage />
      <NavBar setNavOpen={setNavOpen} navOpen={navOpen}/>
      <main>
        <Menu />
      </main>
    </body>
  </Layout>
  )
}

export default IndexPage
