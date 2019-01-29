import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import "../App.css";
import logo from "../blockchain.svg";
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
  NavItem,
  Input,
  Checkout,
  Row
} from "react-materialize";
import Crypto from "./crypto";

class CheckoutField extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="checkoutForm">
          <div className="instuctions">
            <h2>We currently accept Bitcoin and US dollars!</h2>
            <h3>
              just fill out this form and choose the $USD option or the BTC
              option!
            </h3>
          </div>
          <Row>
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input
              s={12}
              label="disabled"
              defaultValue="I am not editable"
              disabled
            />
            <Input type="password" label="password" s={12} />
            <Input type="email" label="Email" s={12} />
          </Row>

          <div className="paymentOptions">
            <Crypto />

            <Checkout
              name={"The Road to learn React"}
              description={"Open Source React Book"}
              amount={1}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CheckoutField;
