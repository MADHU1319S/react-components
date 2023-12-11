import axios from "axios";
import { Component } from "react";
import Images from "./image";
import "./style.css"

class Product extends Component{

    state={
        array:[]
    }

    Oneobject=()=>{
        // fetch("https://fakestoreapi.com/products")
        // .then(res=>res.json())
        // .then(json=>console.log(json))
        axios.get("https://fakestoreapi.com/products")
        .then(result=>{
            if(result.status===200){
                alert("opening cards")
                console.log(result)
                this.setState({
                    array:result.data
                    
                })
            

            }
            else{
                alert("Misson Failed")
            }
        })
    

    }
    handle5=(val)=>{
        alert(`${val.description}`)
    }
    render(){
        console.log(this.state.array,"console success")
        return(
            <>
            <a href="ee"><h1 ><center>Online Shopping</center></h1></a>
            <div className="Buttons">
            <button onClick={this.Oneobject}>click me to get products</button>
            <button>Home</button>
            <button>Clothing</button>
            <button>Accessories</button>
            <button>Jewellery</button>
            </div>
           
            <div className="main">

            {
                this.state.array.length>0 && this.state.array.map((val)=>{
                    return(
                           
                         <div className="div">
                            <h5>{val.title}</h5>
                            <Images ImageLink={val.image}/>
                            <p>price {val.price}</p>
                            <p>rating {val.rating.rate}</p>
                            <p>items buy {val.rating.count}</p>
                           <button id="uni" onClick={()=>{this.handle5(val)}}>click me</button>
                        </div>
                       
                    
                    )
                    // {
                    //     let btn=document.getElementById("uni")
                    //     btn.addEventListener("click",()=>{
                    //         <p>val[description]</p>
                    //     })
                        

                    // }
                })
            }

            <footer style={{height:"100px", backgroundColor:"blue"}}>

            </footer>
            </div>
            </>
        )
    }
}
export default Product