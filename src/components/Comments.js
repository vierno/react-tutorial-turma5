import React, { Component } from "react";
import SingleComment from "./SingleComment";

export default class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h2>Comentários</h2>
        <SingleComment body="testando comentário" user="João" />
        <SingleComment body="comentário 2" user="Maria" />
      </div>
    );
  }
}
