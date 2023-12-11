import { Component } from "react";

class Images extends Component{
    render(){
        return(
            <>
                <img src={this.props.ImageLink} height={120} width={120} alt="pics"></img>
            </>
        )
    }
}
export default Images