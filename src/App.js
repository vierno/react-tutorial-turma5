import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/" exact component={HomePage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
