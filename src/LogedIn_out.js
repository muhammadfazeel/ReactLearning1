import React from 'react';

class App extends React.Component {
    constructor(){
      super();
      this.state={
        isLoggedIn:true
      }
      this.handleLogOut=this.handleLogOut.bind(this)
      this.handleLogIn=this.handleLogIn.bind(this)
    }
    handleLogOut(){
      this.setState({            
      isLoggedIn:false
      })
    }
    handleLogIn(){
      this.setState({
        isLoggedIn:true
      })
    }
    render() {
      console.log(this.state.isLoggedIn)
       
      return (
      <div>
        {this.state.isLoggedIn?<h2>You Are Logged In</h2>:<h2>Please LogIn</h2>}
        {this.state.isLoggedIn?<button className="btn-primary" onClick={this.handleLogOut}>LogOut</button>:<button className="btn-danger" onClick={this.handleLogIn}>LogIn</button>}
      </div>
        );
    }
  }
   
  export default App;