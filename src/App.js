// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

import Table from './Operations/tabledata/table'
import Ordered from './Operations/Lists/orderedlist';
import Unordered from './Operations/Lists/unorderedlist';
import Absolute from './Operations/Images/absolute';
function App(){
  return(
    <div>
      <Table/>
      <Ordered/>
      <Unordered/>
      <Absolute/>  
    </div>
  )
}

export default App;
