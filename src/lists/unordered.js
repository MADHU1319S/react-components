import { Component } from "react";
import { DataList } from "./datalist";

class UnorderedList extends Component{
    render(){
        return(
            <ul>
                <DataList/>
            </ul>
        )
    }
}
export default UnorderedList