import React from 'react';

class Demo extends React.Component{
  constructor(props){
  super(props);
  this.state={"roll":101}

  }
  update_roll = () => (
    this.setState((state)=> (
      {roll:state.roll+1}
  ))
  )
  componentDidUpdate(prevProps,prevstate){
    console.log("change");
  }
  componentDidMount(){
    console.log("use for api");
  }
    render(){
        return(
          <div>
            <h1>roll number of twinkle{this.state.roll}</h1>
            <button onClick={this.update_roll}> roll number</button>
            </div>
            
            )
        
    }
}


export default Demo;