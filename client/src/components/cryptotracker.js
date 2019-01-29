import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import NumberFormat from "react-number-format";

class CryptoTracker extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          cryptos: []
        };
      }
    
      componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
          .then(res => {
            const cryptos = res.data;
            console.log(cryptos);
            this.setState({cryptos: cryptos});
          })
      }
    
    render() {
        return (
          <div className="cryptotracker">
            {Object.keys(this.state.cryptos).map((key, index) => (
    
              <div id="crypto-container" key={index}>
                <span className="left">{key}</span>
                <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'$'} /></span>
              </div>
    
            ))}
          </div>
        );
      }
}

export default CryptoTracker;