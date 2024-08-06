import React, { Component } from "react";

export default class HandleEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Hello World!",
    };
  }

  render() {
    const { msg } = this.state;
    return (
      <div>
        <div>{msg}</div>
        <button
          onClick={() => {
            this.setState({ msg: "Goodbye World!" });
          }}
        >
          change msg
        </button>
      </div>
    );
  }
}
