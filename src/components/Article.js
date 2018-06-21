import React, { Component } from "react";

export default class Article extends Component {
  state = {
    title: "Carregando...",
    body: "A matéria estará dispnível em breve",
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/3/").then(response => {
      response.json().then(data => {
        this.setState({
          title: data.title,
          body: data.body,
        })
      })
    })
  }
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <div className="body">
          {this.state.body}
        </div>
      </React.Fragment>
    );
  }
}