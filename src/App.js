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

// export default App;
import Forms from "./Forms/forms"
import MyComponent from "./Forms/withoutJSX"
import OrderedList from "./lists/ordered"
import UnorderedList from "./lists/unordered"
import Table from "./table/table"
function App(){
  return(
    <div>
        <Table/>
        <OrderedList/>
        <UnorderedList/>
        <Forms/>
        <MyComponent/>
    </div>
  )
}
export default App
