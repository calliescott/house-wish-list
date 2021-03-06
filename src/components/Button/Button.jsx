import React, { Component } from "react";
import("./Button.scss");

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

export default Button;