import React, { Component } from "react";
import Article from "../components/Article";
import Comments from "../components/Comments";

export default class ArticlePage extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div className="App">
        <Article id={id} />
        <Comments id={id} />
      </div>
    );
  }
}
