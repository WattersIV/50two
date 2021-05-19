import React, { useState } from "react"
import { Link } from "gatsby"
import NavBar from '../components/NavBar'
import Map from '../components/Map'
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationDetails from "../components/LocationDetails"
import '../components/store-details.css'

const StoreDetails = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Layout>
      <SEO title="Store Details" />
      <h1>Store Details</h1>
      <body id='store-details-body'>
        <NavBar navOpen={navOpen} setNavOpen={setNavOpen}/>
        <div className='details-container'>
          <Map />
          <LocationDetails />
        </div>
      </body>
    </Layout>

  )
}

export default StoreDetails
