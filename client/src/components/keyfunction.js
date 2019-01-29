import React from "react";
import App from "../App";
import API from "../API";
import { Jumbotron } from "react-bootstrap";
import Card2 from "./Card/card2"

class keyFunction extends React.Component {
  state = {
    game: []
  };
  componentDidMount() {
    API.getGames().then(res => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
  }
  render() {
    return (
      <div className="jumbo">
       <h4> </h4>
      </div>
    );
  }
}

export default keyFunction;
