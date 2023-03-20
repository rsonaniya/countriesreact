import React, { Component } from "react";
import spinner from "./spinner.gif";

export default class LoadingSpinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img style={{ marginTop: "200px" }} src={spinner} alt="" />
      </div>
    );
  }
}
