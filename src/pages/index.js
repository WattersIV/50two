import * as React from "react"
import { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import NavBar from '../components/NavBar'
import HeroPage from '../components/HeroPage'
import Menu from '../components/Menu'
import Layout from "../components/layout"
import SEO from "../components/seo"

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
