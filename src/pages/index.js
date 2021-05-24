import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from '../components/NavBar'
import HeroPage from '../components/HeroPage'
import Menu from '../components/Menu'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [navOpen, setNavOpen] = useState(false)
  const size = useWindowSize()
  return (
  <Layout>
    <SEO title="Home" />
    <body>
      <HeroPage />
      {size.width > 1024 ? (
        null
      ) : (
        <NavBar setNavOpen={setNavOpen} navOpen={navOpen}/>
      )}
      <main>
        <Menu />
      </main>
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
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default IndexPage
