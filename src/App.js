import React, { Component } from 'react';
import './App.css';
import Article from "./components/Article"
import Comments from "./components/Comments"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />
        <Comments />
      </div>
    );
  }
}

export default App;
