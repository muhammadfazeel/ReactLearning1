import React, { Component } from "react";
import "./App.css";

class Practice extends Component {
  constructor() {
    super();
    this.state = { loading: false, info: {} };
  }
  componentDidMount() {
      this.setState({
          loading:true
      })
    fetch("https://swapi.co/api/films/2")
      .then(response => response.json())
      .then(data => {
        this.setState({ loading:false, info: data });
      });
  }

  render() { 
      const text = this.state.loading?"Loading....":this.state.info.director
    return (
      <div>
        <h1>Header</h1>
        <p>{text}</p>
        <h2>Footer</h2>
      </div>
    );
  }
}

export default Practice;
