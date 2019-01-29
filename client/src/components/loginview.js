import React from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import Backbone from "backbone";
import LoginPage from "./auth/LoginPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import "../App.css";
import logo from "../blockchain.svg";
import { Footer, Form } from "react-materialize";

class LoginView extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="root">
          <div className="App-header">
            <div className="svgs">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Login</h2>
            </div>
          </div>
          <div className="login">
            <LoginPage />
          </div>
        </div>
        <div>
          <Footer
            copyrights="blockGames Copyright 2019"
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            }
            links={
                <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/timothy-dolan-023682127/">
                    LinkedIn 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://github.com/tdolan21/blockGames2">
                    Github 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    sources 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://international.bittrex.com/">
                    purchase BTC! 
                  </a>
                </li>
              </ul>
            }
            className="example"
          >
            <h5 className="white-text">Contact us</h5>
            <p className="grey-text text-lighten-4">
              Developers please contact us if you would like to sell your games
              on our marketplace!
            </p>
          </Footer>
        </div>
      </div>
    );
  }
}

export default LoginView;
