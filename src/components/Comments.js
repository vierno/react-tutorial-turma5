import React, { Component } from "react";
import SingleComment from "./SingleComment";

export default class Comments extends Component {
  // estado inicial
  state = {
    comments: []
  }
  componentDidMount() {
    // Requisição e seto o estado
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(response => {
      response.json().then(data => {
        this.setState({
          comments: data
        })
      })
    })
  }
  render() {
    // this.state.comments = [{body: "aiji", name: "iajs"....}, {...}, {...}]
    return (
      <div className="comments">
        <h2>Comentários</h2>
        {this.state.comments.map(comment => {
          return (
            <SingleComment key={comment.id} user={comment.name}>
              {comment.body}
            </SingleComment>
          )
        })}
      </div>
    );
  }
}
