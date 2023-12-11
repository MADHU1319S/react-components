export const Buttons=(props)=>{
    return(
        <>
        <button style={{backgroundColor:props.bgcolor,height:props.height,width:props.width}}>{props.text}</button><br></br>
        </>
    )
}
// export const Buttons=({bgcolor,text})=>{
//     return(
//         <>
//         <button style={{backgroundColor:bgcolor}}>{text}</button>
//         </>
//     )
// }