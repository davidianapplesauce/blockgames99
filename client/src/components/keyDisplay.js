import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import "../App.css";
import logo from "../blockchain.svg";
import { Footer } from "react-materialize";
import Recaptcha from "./recaptcha";
// import { Button } from "reactstrap";
import { Jumbotron } from "react-bootstrap";
import API from "../API";
// import keyFunction from "./keyfunction";

class keyDisplay extends React.Component {
  
  // componentDidMount() {
  //   API.getGames().then(res => {
  //     console.log(res.data);
  //     this.setState({ keys: res.data });
  //   });
  //   const displaykey = () => {
  //     return (
  //     <h4>{game.key} </h4>
  //     );
  //       };
  // }
 

  render() {
    return (
      <div className="parent">
        <div className="root">
          <div className="App-header">
            <div className="svgs">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Press Button To see your key</h2>
            </div>
          </div>
          <div className="jumbo">
            <Jumbotron>
              <h3>
                Your key will replace the message in the middle once your
                purchase has been verified
              </h3>
              <h4 id="keys" id="jumbo-text">
                Thank you for your purchase!
              </h4>
              <p>
                We hope you enjoyed your experience, please give us as much
                feedback as possible!
              </p>
              <button
                id="keyF"
                className="button"
                // onClick={this.displaykey()}
              >
                {" "}
                keypress
              </button>
              <p />
            </Jumbotron>
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
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.linkedin.com/in/timothy-dolan-023682127/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://github.com/tdolan21/blockGames2"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    sources
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://international.bittrex.com/"
                  >
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

export default keyDisplay;
