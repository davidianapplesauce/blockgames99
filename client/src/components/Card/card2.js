import React from "react";
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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { withStyles } from "@material-ui/core";
import AppRouter from "../../AppRouter";
import router from "../../API";

const styles = {
  card: {
    maxwidth: 345
  },
  media: {
    height: 140
  }
};

function Card2(props) {
  return (
    <div className="root">
      <div className="cardParent">
        <Col m={7} s={12}>
          <Card
            horizontal
            header={
              <CardTitle
                className="cardIMG"
                title={props.title}
                image={props.image}
                height="620"
                width="350"
              />
            }
            actions={<Link to="/Checkout">Checkout</Link>}
          >
            <p>{props.description}</p>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default withStyles(styles)(Card2);
