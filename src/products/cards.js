import { Component } from "react";
import img from "../thor.jpeg"

class Cards extends Component{
    render(){
        return(
            
            <>
             {
            this.state.Productlist.map((val)=>{
                return(
                    <>
                    <div className="card" style={{width:200}}>
                    <img src={img} className="card-img-top" alt="thor" style={{height:"100%",width:"100%"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button onClick={()=>this.handleClick(val)} className="btn btn-primary">click me</button>
                    </div>
                    </div>
                    </>
                )
            }
            )
           }
            </>
        )
    }
}
export default Cards