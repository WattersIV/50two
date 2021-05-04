import * as React from "react"
import { Link } from "gatsby"
import NavBar from '../components/NavBar'
import { GoogleMap } from '../components/GoogleMap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const StoreDetails = () => (
  <Layout>
    <SEO title="Store Details" />
    <h1>Store Details</h1>
    <body>
      <NavBar />
      <GoogleMap />
    </body>
  </Layout>
)

export default StoreDetails
