import { TableData2 } from "./tabledat2"
import { TableData1 } from "./tabledata1"
import { TableData3 } from "./tabledata3"
import TableHead from "./tablehead"

export const TableRow=()=>{
    return(
       <>
        <tr>
            <TableHead/>
        </tr>
        <tr>
            <TableData1/>
        </tr>
        <tr>
            <TableData2/>
        </tr>
        <tr>
            <TableData3/>
        </tr>
       </>
    )
}