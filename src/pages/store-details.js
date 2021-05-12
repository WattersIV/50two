import * as React from "react"
import { Link } from "gatsby"
import NavBar from '../components/NavBar'
import Map from '../components/Map'
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationDetails from "../components/LocationDetails"

const StoreDetails = () => (
  <Layout>
    <SEO title="Store Details" />
    <h1>Store Details</h1>
    <body>
      <NavBar />
      <Map />
      <LocationDetails />
    </body>
  </Layout>
)

export default StoreDetails
