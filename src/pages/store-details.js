import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import Map from "../components/Map"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationDetails from "../components/LocationDetails"
import "../components/store-details.css"

const StoreDetails = () => {
  const [navOpen, setNavOpen] = useState(false)
  const size = useWindowSize()
  return (
    <Layout>
      <SEO title="Store Details" />
      <body id="store-details-body">
      <NavBar setNavOpen={setNavOpen} navOpen={navOpen}/>
        <div className="details-container" style={{ marginTop: 'calc(var(--navHeight) + 40px' }} >
          <Map />
          <LocationDetails />
        </div>
      </body>
    </Layout>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default StoreDetails
