import React from "react";
import "./ErrorBoundary.scss";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
          <div className="errorBoundary">
          <div style={{backgroundImage: "url: https://i.imgur.com/yW2W9SC.png "}} />
          <h2>This Page is Broken, please reload</h2>
          </div>
      );
    }
    return this.props.children;
  }
}