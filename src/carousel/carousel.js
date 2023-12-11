import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class CarouselProduct extends Component {
  state = {
    Arr1: ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"],
    Arr2: [
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    ],
    count:0
  }
  handleClick1=()=>{
    if(this.state.count<5){
      let newArr=[...this.state.Arr1,this.state.Arr2[this.state.count]]
    this.setState({
        Arr1:newArr,
        count:this.state.count+1
    })
    }
    else{
      alert('Reached to the end')
    }
  }
  render() {
    return (
        <>
      <Carousel infiniteLoop={true} showThumbs={false}>
        {this.state.Arr1.map((ele) => {
          return(
            <div>
                <img src={ele} height={600} alt="This is Carosel"/>
            </div>
          )
        })}
      </Carousel>
      <button onClick={this.handleClick1}>Add Image</button>
      </>
    );
  }
}
export default CarouselProduct;
