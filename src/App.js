import React from 'react';
import logo from './fl.jpeg';
import './App.css';

class App extends React.Component{


render(){
  return <div>
    { <img src={logo}  width="500"/ > }
    </div>
}
}
// function App() {
//   return (
//     <div className="container">
//     <h1>twinkle</h1>
//     <p>ronak</p>
//     <img src={logo} className="App-logo"/> 
//     </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
// }

export default App;
