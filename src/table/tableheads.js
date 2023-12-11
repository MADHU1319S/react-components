import { Component } from "react";

class TableHead extends Component{
    render(){
        return(
            <>
             <th>Name</th>
             <th>id</th>
             <th>branch</th>
             <th>year</th>
            </>
        )
    }
}
export default TableHead