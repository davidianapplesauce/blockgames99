import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../blockchain.svg";
import {
  Icon,
  Card,
  Col,
  CardTitle,
  Slider,
  Footer,
  Slide,
  Navbar,
  Row,
  Input,
  NavItem
} from "react-materialize";
import Crypto from "./crypto";
import CheckoutField from "./checkoutField";
import Checkout from "../Checkout";

// import { Jumbotron } from "react-bootstrap";
// import { Container } from "react-bootstrap";
import CryptoTracker from "./cryptotracker";
// import { Button } from "react-boostrap";
import { Jumbotron } from "react-bootstrap";

class Payments extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="root">
          <div className="App-header">
            <div className="svgs">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Checkout</h2>
            </div>
          </div>
          <div className="payments">
            <div className="parent">
              <div className="checkoutForm">
                <div className="instuctions">
                  <div className="jumbo">
                    {/* <Jumbotron>
                      <h3>We currently accept BTC, BCH, and $USD</h3>
                      <p>
                        If there is a payment method you would like to use
                        please let us know
                      </p>
                      <p>
                        Once your payment method is complete then your key will
                        be displayed!
                      </p>
                      <p />
                    </Jumbotron> */}
                    <Jumbotron>
                      <h3>
                      We currently accept BTC, BCH, and $USD
                      </h3>
                      <p id="jumbo-text">
                      If there is a payment method you would like to use
                        please let us know
                      </p>
                      <p>
                      Once your payment method is complete then your key will
                        be displayed!
                      </p>

                      <p />
                    </Jumbotron>
                  </div>

                  <div className="cryptotracker">
                    <CryptoTracker />
                  </div>
                  <Row>
                    <Input s={6} label="First Name" />
                    <Input s={6} label="Last Name" />
                    <Input s={12} label="What is your favorite currency?" />
                    <Input type="email" label="Email" s={12} />
                    <Input type="password" label="password" s={12} />
                  </Row>
                  {/* <div className="row">
                    <Row> 
                   
                      <Crypto />
                   
                    
                      <Checkout
                        name={"blockGames"}
                        description={"digital game keys"}
                        amount={3}
                      />
                   
                    </Row>
                    
                  </div> */}

                  <div className="btc">
                    <Crypto />
                  </div>
                  <div className="USD">
                    <Checkout
                      name={"blockGames"}
                      description={"digital game keys"}
                      amount={3}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="continue">
              <Col m={6} s={12}>
                <Card
                  className="continue"
                  textClassName="white-text"
                  actions={<Link to="/keyDisplay">Continue to your key</Link>}
                  onClick={this.handleFormSubmit}
                />
              </Col>
            </div>

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
                    <a className="grey-text text-lighten-3" href="#!">
                      LinkedIn (not complete)
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Github (not complete)
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      sources (not complete)
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      etc. (not complete)
                    </a>
                  </li>
                </ul>
              }
              className="example"
            >
              <h5 className="white-text">Contact us</h5>
              <p className="grey-text text-lighten-4">
                Developers please contact us if you would like to sell your
                games on our marketplace!
              </p>
            </Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Payments;
