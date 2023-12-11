// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p style={{color:"red"}}>
//           Madhu Devunuri
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// export default App;


function data(){
  return(
    <div>
    <table style={{border:"1px solid"}}>
      <tr>
      <th style={{border:"1px solid"}}>No.</th>
      <th style={{border:"1px solid"}}>Name</th>
      <th style={{border:"1px solid"}}>Course</th>
      <th style={{border:"1px solid"}}>Id.Num</th>
      <th style={{border:"1px solid"}}>Location</th>
      </tr>
      <tr>
        <td style={{border:"1px solid"}}>1</td>
        <td style={{border:"1px solid"}}>Madhu</td>
        <td style={{border:"1px solid"}}>CSE</td>
        <td style={{border:"1px solid"}}>20001806</td>
        <td style={{border:"1px solid"}}>Siddipet</td>
      </tr>
      <tr>
        <td style={{border:"1px solid"}}>2</td>
        <td style={{border:"1px solid"}}>Anil</td>
        <td style={{border:"1px solid"}}>MEC</td>
        <td style={{border:"1px solid"}}>19784585</td>
        <td style={{border:"1px solid"}}>Siddipet</td>
      </tr>
      <tr>
        <td style={{border:"1px solid"}}>3</td>
        <td style={{border:"1px solid"}}>Sairam</td>
        <td style={{border:"1px solid"}}>CSE</td>
        <td style={{border:"1px solid"}}>20078458</td>
        <td style={{border:"1px solid"}}>Suryapet</td>
      </tr>
      <tr>
        <td style={{border:"1px solid"}}>4</td>
        <td style={{border:"1px solid"}}>Venkat</td>
        <td style={{border:"1px solid"}}>ECE</td>
        <td style={{border:"1px solid"}}>18754857</td>
        <td style={{border:"1px solid"}}>Guntur</td>
      </tr>
      <tr>
        <td style={{border:"1px solid"}}>5</td>
        <td style={{border:"1px solid"}}>Sushmitha</td>
        <td style={{border:"1px solid"}}>ECE</td>
        <td style={{border:"1px solid"}}>20178569</td>
        <td style={{border:"1px solid"}}>Ongole</td>
      </tr>
    </table>
  
   <ul>
     <h3>Skills</h3>
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
     <li>BootStrap</li>
     <li>ReactJS</li>
   </ul>
   <ol>
     <h3>Languages Known</h3>
     <li>English</li>
     <li>Hindi</li>
     <li>Telugu</li>
   </ol>
 </div>
  )
}
export default data;