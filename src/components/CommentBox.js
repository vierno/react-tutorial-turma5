import React, { Component } from "react";

export default class CommentBox extends Component {
  state = {
    name: "",
    body: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.insertNewComment(this.state)
  };
  handleNameChange = event => {
    const value = event.target.value;
    this.setState({
      name: value
    });
  };
  handleBodyChange = event => {
    const value = event.target.value;
    this.setState({
      body: value
    });
  };
  render() {
    return (
      <div className="new_comment">
        <form onSubmit={this.handleSubmit}>
          <h3>Adicionar novo comentário</h3>
          <label htmlFor="name">Nome</label>
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
            type="text"
            id="name"
          />
          <label htmlFor="body">Comentário</label>
          <textarea
            onChange={this.handleBodyChange}
            value={this.state.body}
            id="body"
            className="comment_box"
          />
          <button>Comentar</button>
        </form>
      </div>
    );
  }
}
