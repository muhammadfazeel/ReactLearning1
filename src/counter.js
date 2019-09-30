import React from 'react';

//*************************************************** */
//Increment Decrement

class App extends React.Component {
 constructor(){
   super();
   this.state = {
    count:0
     }
     this.handleIncrement=this.handleIncrement.bind(this);
     this.handleDecrement=this.handleDecrement.bind(this)
    }
     handleIncrement() {
      this.setState((prvState)=>{
        return {
          count:prvState.count+1
        }
      })
    }
    handleDecrement() {
      this.setState((ThisState)=>{
        return {
          count:ThisState.count-1
        }
      })
    }    
  render() { 
    return ( <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.handleIncrement}>Increment</button>
      <button className="btn-primary" onClick={this.handleDecrement}>Decrement</button>
    </div> );
  }
}

export default App;