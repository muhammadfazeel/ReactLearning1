import React from 'react';


import Comp from './components/isloading';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      isLoading:true,
      unReadMessages:['1','2','3']
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },1500)
  }
  render() { 
    return ( <div>
      <Comp isLoading={this.state.isLoading } />
      {
      this.state.unReadMessages.length> 0 && <h4>You Have {this.state.unReadMessages.length} unread Messages</h4>
      }
      </div> );
  }
}

export default App;