import React, { Component } from "react";

import MessagesList from "../MessagesList";

class Main extends Component {
  constructor(args) {
    super(args);
    this.state = {
      messages: [
        {
          text: "Mensaje del Tweet",
          picture: "url",
          displayName: "Sebastian Martha",
          userName: "sebas.martha",
          date: Date.now() - 180000
        },
        {
          text: "Otro mensaje del Tweet",
          picture: "url",
          displayName: "Brenda Beatriz",
          userName: "brenda.beatriz",
          date: Date.now() - 1800000
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages} />
      </div>
    );
  }
}

export default Main;
