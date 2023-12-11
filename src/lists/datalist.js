import Obj from "./objdata"

   
    

    export const DataList=()=>{
       <Obj/>
        const{car1,car2,car3,car4}=Obj
        return(
            <>
            <li>{car1}</li>
            <li>{car2}</li>
            <li>{car3}</li>
            <li>{car4}</li>
            </>
        )
    }