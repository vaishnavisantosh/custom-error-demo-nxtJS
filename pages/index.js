import React, { Component } from "react";
import { Grid } from "@material-ui/core";
// import QLogo from './../src/assets/images/Q-logo.svg';
// import '../styles/public.scss';

export default function AuthLayout(props) {
  return (<Grid container className="login-page-container">
    <Grid item sm={6} xs={12} className="login-form">
      {props.children}
    </Grid>
    <Grid item sm={6} xs={0} className="background-img trangles">
      <div className="trangle-big">
        <span className="image-1"></span>
        <span className="shadow-image-1"></span>
        <span className="image-2"></span>
        <span className="shadow-image-2"></span>
      </div>
      <div className="trangle-small">
      </div>
    </Grid>
  </Grid>
  );
}