import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import EggImg from '../images/breakfast.jpg'



export default function Gallery () {
    return (
        <Carousel 
        useKeyboardArrows={true}
        transitionTime={500}
        infiniteLoop={true}
        autoPlay={true}
        >
        <div>
            <img src={EggImg} />
            <p> One</p>
        </div>
        <div>
            <img src={EggImg} />
            <p> Two</p>
        </div>
        </Carousel>
    )
}