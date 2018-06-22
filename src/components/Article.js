import React, { Component } from "react";

export default class Article extends Component {
  state = {
    title: "Carregando...",
    body: "A matéria estará dispnível em breve",
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/`).then(response => {
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
          {this.state.body.split("\n").map((block, i) => {
            return <p key={i}>{block}</p>
          })} 
        </div>
      </React.Fragment>
    );
  }
}
