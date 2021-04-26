import * as React from "react"
import { Link } from "gatsby"
import NavBar from '../components/NavBar'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Store Details</h1>
    <body>
      <NavBar />
    </body>
  </Layout>
)

export default SecondPage
