import React from 'react';

// class Demo extends React.Component{
//     render(){
//         return(
//             <h1>twinkle is a fronted developer</h1>)
        
//     }
// }
// export default Demo;
function Wel(props) {
  return <div><h1>Hello, {props.name}</h1>
  <h2>It is {new Date().toLocaleTimeString()}.pm</h2></div>
}
function tic() {
    
    return(
    
      <div>
        <Wel name="Twinkle" />
        <Wel name="Amar" />
        <Wel name="Diwakar" />
      
        {/* <h2>It is {new Date().toLocaleTimeString()}.pm</h2> */}
      </div>)
    
   
  
}


  

export default tic;