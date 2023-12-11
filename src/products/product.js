import { Component } from "react";
import image from "./desserts1.jpeg"
import image1 from "./desserts2.jpeg"
import image2 from "./desserts3.jpeg"
import image3 from "./food1.jpeg"
import image4 from "./food2.jpeg"
import image5 from "./food3.jpeg"
import image6 from "./food4.jpeg"
import image7 from "./food5.jpeg"
import image8 from "./nonveg2.jpeg"
import image9 from "./nonveg3.jpeg"
import image10 from "./nonveg4.jpeg"
import image11 from "./starter2.jpeg"
import image12 from "./starter3.jpeg"
import image13 from "./tandoori2.jpeg"
import image14 from "./tandoori3.jpeg"
import image15 from "./tandoori4.jpeg"

import "./style.css"
class Products extends Component{


    state={
        Productlist:[
            {
                name:"food",
                ima:image
            },
            {
                name:"food1",
                ima:image2
            },
            {
                name:"food2",
                ima:image3
            },
            {
                name:"food3",
                ima:image1
            },
            {
                name:"food4",
                ima:image15
            },
            {
                name:"food5",
                ima:image4
            },
            {
                name:"food6",
                ima:image5
            },
            {
                name:"food7",
                ima:image6
            },
            {
                name:"food8",
                ima:image7
            },
            {
                name:"food9",
                ima:image8
            },
            {
                name:"food10",
                ima:image9
            },
            {
                name:"food11",
                ima:image10
            },
            {
                name:"food12",
                ima:image11
            },
            {
                name:"food13",
                ima:image12
            },
            {
                name:"food14",
                ima:image13
            },
            {
                name:"food15",
                ima:image14
            }
        ]
    }

    handleClick=(data)=>{
        alert(data.name)
    }



    render(){
        return(
            <>
             <div className="major">
           {
            this.state.Productlist.map((val)=>{
                return(
                    <>
                   
                        <div className="min">
                        <div className="card" style={{width:300}}>
                        <img src={val.ima} className="card-img-top" alt="thor" style={{height:"100%",width:"100%"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{val.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button onClick={()=>this.handleClick(val)} className="btn btn-primary">click me</button>
                        </div>
                        </div>
                        </div>
                    
                    </>
                )
            }
            )
           }
           </div>
           </>
        )
    }
}
export default Products