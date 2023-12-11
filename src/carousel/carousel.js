const { Component } = require("react");
import ima from "../products/nonveg2.jpeg"
import ima1 from "../products/nonveg4.jpeg"
import ima2 from "../products/nonveg3.jpeg"



class Carousel extends Component{
    render(){
        return(
            <>
            <div id="carouselExampleCaptions" clasName="carousel slide" data-bs-ride="carousel">
            <div clasName="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" clasName="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div clasName="carousel-inner">
                <div clasName="carousel-item active">
                <img src={ima} clasName="d-block w-100" alt="one"/>
                <div clasName="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div clasName="carousel-item">
                <img src={ima1} clasName="d-block w-100" alt="two"/>
                <div clasName="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div clasName="carousel-item">
                <img src={ima2} clasName="d-block w-100" alt="three"/>
                <div clasName="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button clasName="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span clasName="carousel-control-prev-icon" aria-hidden="true"></span>
                <span clasName="visually-hidden">Previous</span>
            </button>
            <button clasName="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span clasName="carousel-control-next-icon" aria-hidden="true"></span>
                <span clasName="visually-hidden">Next</span>
            </button>
            </div>
            </>
        )
    }
}
export default Carousel