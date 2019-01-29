import React, { Component } from "react";
import logo from "./blockchain.svg";
import Checkout from "./Checkout";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from "./AppRouter"
import {
  Button,
  Icon,
  Card,
  Col,
  CardTitle,
  Slider,
  Footer,
  Slide,
  Navbar,
  NavItem
} from "react-materialize";
import { Jumbotron } from "react-bootstrap";
import axios from 'axios';

import CryptoTracker from "./components/cryptotracker";
// import paymentApi from "./backend/routes/paymentApi";
// import { loadReCaptcha } from "react-recaptcha-google";


class App extends Component {
  // state={

  // }

  // componentDidMount() {
  //   loadReCaptcha();
  // }  
  
  render() {
    return (
      <div className="root">
      <div className="container">

      <main>
      
        <div className="App-header">
        <div className="svgs">

          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to blockGames</h2>
          </div>
        </div>
        <div className="intro">
          <h3>
           This is your destination for purchasing games with your blockchain based currencies!
          </h3>
        </div>
        <div className="card">
          <Slider>
            <Slide
              src="https://i.ytimg.com/vi/5Derwdk-rgA/maxresdefault.jpg"
              title="Blockchain marketplace for your digital game keys!"
              // height="580"
              // width="250"
            >
              Currently accepting BTC, future BCH and ETH integration.
            </Slide>
            <Slide
              src="http://fullcrackpc.com/wp-content/uploads/torn-tales-banner.jpg"
              title="Take a look around we have many indie games"
              placement="left"
            >
              We also strive to have the latest AAA titles!
            </Slide>
            <Slide
              src="https://steamcdn-a.akamaihd.net/steam/apps/727110/ss_d3cfabc7ea372581791bd8903dee80fc23f6f20a.1920x1080.jpg?t=1508397447"
              title="Developers please contact us!"
              placement="right"
            >
              We would love to host your game keys!
            </Slide>
          </Slider>
        </div>
       
        </main>
        </div>
<div className="crypto-ui">
<Jumbotron>
  <h4>We believe that the blockchain is the technology that is going to shape the future</h4>
  <p id="jumbo-text">
   With that comes a certain responsibility to the community, and we will always do our best to support all payment methods.
  </p>
  <p>
    These prices update whenever you come to our website so you can make an informed decision on how you would like to purchase.
    </p>
  
  <p>
    
  </p>
</Jumbotron>

</div>
<CryptoTracker />
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
            Developers please contact us if you would like to sell your games on
            our marketplace!
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
