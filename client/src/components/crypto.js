import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import "../App.css"
import logo from "../blockchain.svg"
import Card2 from "./Card/card2";
import API from "../API";
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

class Crypto extends React.Component{
    render(){
        return (<div className="crypto">
<form action="https://bitpay.com/checkout" method="post" >
  <input type="hidden" name="action" value="checkout" />
  <input type="hidden" name="posData" value="" />
  <input type="hidden" name="data" value="PE3KUiQlU8p109DUpxgx1ATqQDi6v701rd0Rco6U2t61LPKjqodaPw4E58M/KRfMs0e2lY0J1P7TDWc4MohZjQ+yfj7j0xwSwyKagZrsqevqQJWDarcrTvHNUm1S0HynYmRxi4XVkFdiZV8rgIyBwA==" />
  <input type="image" src="https://bitpay.com/cdn/en_US/bp-btn-pay-currencies.svg" name="submit" alt="BitPay, the easy way to pay with bitcoins." >
</input>
</form>
</div>
        )
    }
}

export default Crypto;