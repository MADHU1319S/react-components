//import DayFunction from "./Date/dayfunction"
import { Wishes } from "./Date/wishes"
import { Buttons } from "./button/buttoncomponents"
import Heading from "./button/childprop"
import Table from "./tables/table"





function App(){
  
  const dayIndex=new Date().getDay()
  console.log(dayIndex)
  function DayFunction(day){
    switch(day){
    case 0:
        return "sunday"
    case 1:
        return "monday"
    case 2:
        return "tuesday"
    case 3:
        return "wednesday"
    case 4:
        return "thursday"
    case 5:
        return "friday"
    case 6:
        return "satday"  
    default:
        return "none"    
    }
  }


  const time=new Date().getHours()
  function Hrs(time){
    return ` ${time}Hrs`
  }
  const min=new Date().getMinutes()
  function Min(mn){
    return ` ${mn}Min`
  }
  const sec=new Date().getSeconds()
  function Sec(se){
    return ` ${se}sec`
  }


  console.log(time);
  function TimeNow(tm){
    if(tm>=4&&tm<=11){
      return "Good Morning"
    }
    else if(tm>11&&tm<=16){
      return "Good Afternoon"
    }
    else if(tm>16&&tm<=20){
      return "Good evening"
    }
    else{
      return "Good Night"
    }
  }

  



  const month=new Date().getMonth()
  console.log(month)
  function Month(mn){
    switch(mn){
      case 0:
          return "january"
      case 1:
          return "february"
      case 2:
          return "march"
      case 3:
          return "april"
      case 4:
          return "may"
      case 5:
          return "june"
      case 6:
          return "july"     
        case 7:
            return "august"
        case 8:
            return "september"
        case 9:
            return "october"
        case 10:
            return "november"
        case 11:
            return "december" 
        default:
            return "none"    
        }
  }



  const tharik=new Date().getDate()
  
  function Thedi(th){
    return `${th}`
  }


  const year=new Date().getFullYear()
  
  function Year(yr){
    return `${yr}`
  }




  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  return(
      <>
        <Wishes days={DayFunction(dayIndex)} Wish={TimeNow(time)} curtime={Hrs(time)} Minutes={Min(min)} Seconds={Sec(sec)} curmonth={Month(month)} din={Thedi(tharik)} curyear={Year(year)}/>

        
        <Table/>

        <Buttons text={"login"} bgcolor={getRandomColor()} height={90} width={450}/>
        <Buttons text={"signup"} bgcolor={getRandomColor()} height={75} width={375}/>
        <Buttons text={"reset"} bgcolor={getRandomColor()} height={60} width={300}/>
        <Buttons text={"submit"} bgcolor={getRandomColor()} height={45} width={225}/>
        <Buttons text={"home"} bgcolor={getRandomColor()} height={30} width={150}/>
        <Buttons text={"back"} bgcolor={getRandomColor()} height={15} width={75}/>

        <Heading>
        <p>hello world</p> <p>hello world</p>
        </Heading>

        
        
      </>

  )
}
export default App







