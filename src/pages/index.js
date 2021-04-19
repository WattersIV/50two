import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroPage from '../components/HeroPage'
import Menu from '../components/Menu'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <body>
      <HeroPage />
      <main>
        <Menu />
      </main>
    </body>
  </Layout>
)

export default IndexPage
