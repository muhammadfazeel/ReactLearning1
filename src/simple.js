import React from 'react';
//********************************************************************************/
class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLoggedIn:false
    }
  }
  render() { 
    let Word;
    if(this.state.isLoggedIn){
      Word="LoggedIn";
    }
    else{
      Word="LoggedOut";
    }
    return ( <div>
      <h1>You Are {Word}</h1>
    </div> );
  }
}
 
export default App;

