import React from "react";
import App from "next/app";
import Error from "./_error";
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
