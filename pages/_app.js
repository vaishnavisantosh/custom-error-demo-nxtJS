import React from "react";
import App from "next/app";
class MyApp extends App {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error) {
    console.log("didcatch----------------------->", error);
  }

  render() {
    console.log("inside render---------->");
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
