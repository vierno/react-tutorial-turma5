import React, { Component } from "react";

export default class SingleComment extends Component {
  state = {
    open: true
  };
  handleClick = () => {
    // Vai setar meu estado
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <div className="comment">
        <p className="comment_user">{this.props.user}</p>
        {this.state.open ? (
          <div className="comment_body">
            {this.props.children.split("\n").map((block, i)=> {
              return <p key={i}>{block}</p>
            })}
          </div>
        ) : null}
        <button onClick={this.handleClick}>
          {this.state.open ? "Esconder" : "Mostrar"} comentário
        </button>
      </div>
    );
  }
}
