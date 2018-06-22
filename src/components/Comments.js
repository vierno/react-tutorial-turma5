import React, { Component } from "react";
import CommentBox from "./CommentBox";
import SingleComment from "./SingleComment";

export default class Comments extends Component {
  // estado inicial
  state = {
    comments: []
  };
  componentDidMount() {
    // Requisição e seto o estado
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`).then(
      response => {
        response.json().then(data => {
          this.setState({
            comments: data
          });
        });
      }
    );
  }
  insertNewComment = comment => {
    comment.id = this.state.comments.length + 1
    this.setState({
      comments: [comment, ...this.state.comments]
    })
  }
  render() {
    // this.state.comments = [{body: "aiji", name: "iajs"....}, {...}, {...}]
    return (
      <div className="comments">
        <h2>Comentários</h2>
        <CommentBox insertNewComment={this.insertNewComment} />
        {this.state.comments.map(comment => {
          return (
            <SingleComment key={comment.id} user={comment.name}>
              {comment.body}
            </SingleComment>
          );
        })}
      </div>
    );
  }
}
