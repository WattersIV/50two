import React, {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import EggImg from '../images/breakfast.jpg'

const desktopStyles = {
    maxWidth: '1200px',
    margin: '20px auto 0 auto',
}


export default function Gallery () {
    const size = useWindowSize()
    return (
    <div id='Gallery' style={size.width > 992 ? 
        desktopStyles :
        {}
        }>
        <Carousel 
        useKeyboardArrows={true}
        transitionTime={500}
        infiniteLoop={true}
        autoPlay={true}
        >
        <div>
            <img alt='' src={EggImg} />
            <p> One!!!!!!!!!!!!!</p>
        </div>
        <div>
            <img alt='' src={EggImg} />
            <p> Two</p>
        </div>
        </Carousel>
    </div>
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