import { Component } from "react";
import Heads from "./tableheads";
class Table extends Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <Heads/>
                    </tr>
                    <tr>
                        <td>madhu</td>
                        <td>CSE</td>
                    </tr>
                    <tr>
                        <td>Sairam</td>
                        <td>CIVIL</td>
                    </tr>
                    <tr>
                        <td>venkat</td>
                        <td>ECE</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Table