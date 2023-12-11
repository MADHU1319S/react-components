import { Component } from "react";
import { DataList } from "./datalist";

class OrderedList extends Component{
    render(){
        return(
            <ol>
                <DataList/>
            </ol>
        )
    }
}
export default OrderedList