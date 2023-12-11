import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "./download1.jpeg"
import img2 from "./download2.jpeg"
import img3 from "./download3.jpeg"
class DemoCarousel extends Component {
    render() {
        return (
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <Carousel
             width={"100%"}
            showArrows={true}
             showIndicators={true}
             dynamicHeight={"100%"}>
                <div>
                    <img src={img1} alt='s'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt='r' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt='y'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
           </div>
        );
    }
}
export default DemoCarousel