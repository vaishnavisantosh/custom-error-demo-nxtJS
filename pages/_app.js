import React from "react";
import App from "next/app";
import Error from "./_error";
import '../styles/public.scss';
class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { res } = ctx;

    const errorCode = res.statusCode > 200 ? res.statusCode : false;

    pageProps.query = ctx.query;

    return {
      pageProps,
      errorCode,
    };
  }

  componentDidCatch(error) {
    console.log("didcatch----------------------->", error);
  }

  render() {
    console.log("inside render---------->");
    const { Component, pageProps, errorCode } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
