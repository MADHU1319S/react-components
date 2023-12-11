import { Data } from "./tdata"
import { Head } from "./thead"


function Table(){
    return(
       <table>
   
            <tr>
                <Head>
                    <th>name</th>
                    <th>num</th>
                    <th>course</th>
                </Head>
            </tr>
            <tr>
                <Data>
                    <td>madhu</td>
                    <td> 737</td>
                    <td>cse</td>
                </Data>
            </tr>
            <tr>
            <Data>
                <td>sai</td>
                <td> 937</td>
                <td>mpc</td>
            </Data>
            </tr>
            <tr>
            <Data>
                <td>venkat</td>
                <td>4252</td>
                <td>ece</td>
            </Data>
            </tr>
       
       </table>
    )
}
export default Table