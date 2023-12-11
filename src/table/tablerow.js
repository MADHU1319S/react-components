import { TableData } from "./tabledata";
import TableHead from "./tableheads";

function TableRows(){
    return(
        <>
        <tr>
            <TableHead/>
        </tr>
        <tr>
            <TableData/>
        </tr>
        <tr>
            <TableData/>
        </tr>
        <tr>
            <TableData/>
        </tr>
        </>
    )
}
export default TableRows