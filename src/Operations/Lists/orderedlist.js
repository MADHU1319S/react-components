import { Component } from "react";
import Lists from "./lists";

class Ordered extends Component{
    render(){
        return(
            <div>
                <ol>
                    <Lists/>
                </ol>
            </div>
        )
    }
}
export default Ordered