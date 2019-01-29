import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import logo from "./blockchain.svg";
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
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// // import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// // import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import MediaCard from "./components/Card/card";
// import Form from "./components/Form/form";
// import products from "./products.json";
// import Card2 from "./components/Card/card2";
// import API from "./API";
import Products from "./components/product";

import Payments from "./components/payments";

import Users from "./components/users";
import Information from "./components/information";
import LoginView from "./components/loginview";
import keyDisplay from "./components/keyDisplay";
// import Products from "./components/pages/product"
class AppRouter extends React.Component{
 state = {
  games: []
};

render(){
  return ( 
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products/">Products</Link>
          </li>
          <li>
            <Link to="/Users/">Users</Link>
          </li>
          <li>
            <Link to="/Information/">Information</Link>
          </li>
          <li id="login">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={App} />
      <Route path="/Products" component={Products} />
      <Route path="/Users" component={Users} />
      <Route path="/Checkout" component={Payments} />
      <Route path="/Information" component={Information} />
      <Route path="/login" component={LoginView}/>
      <Route path="/keyDisplay" component={keyDisplay}/>
    </div>
  </Router>
  )
}

// loadGames = () => {
//   API.getGames()
//     .then(res => this.setState({ games: res.data }))
//     .catch(err => console.log(err));
//  };
//
//
//
//
// // SEPERATION OF DIFFERENT PAGES
// const Products = () => (

//
//
//
//
//
// SEPERATION OF DIFFERENT PAGES
// const Users = () => (
//   <div className="root">
//     <div className="App-header">
//       <div className="svgs">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Select a product to purchase!</h2>
//       </div>
//     </div>
//     <div className="form">
//       <Form />
//     </div>
//     <Footer
//       copyrights="blockGames Copyright 2019"
//       moreLinks={
//         <a className="grey-text text-lighten-4 right" href="#!">
//           More Links
//         </a>
//       }
//       links={
//         <ul>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               LinkedIn (not complete)
//             </a>
//           </li>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               Github (not complete)
//             </a>
//           </li>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               sources (not complete)
//             </a>
//           </li>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               etc. (not complete)
//             </a>
//           </li>
//         </ul>
//       }
//       className="example"
//     >
//       <h5 className="white-text">Contact us</h5>
//       <p className="grey-text text-lighten-4">
//         Developers please contact us if you would like to sell your games on our
//         marketplace!
//       </p>
//     </Footer>
//   </div>
// );
//
//
//
//
//
// const Checkout = () => (
//   <div className="parent">
//   <div className="root">
//     <div className="App-header">
//       <div className="svgs">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Select a product to purchase!</h2>
//       </div>
//     </div>

//     <Footer
//       copyrights="blockGames Copyright 2019"
//       moreLinks={
//         <a className="grey-text text-lighten-4 right" href="#!">
//           More Links
//         </a>
//       }
//       links={
//         <ul>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               LinkedIn (not complete)
//             </a>
//           </li>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               Github (not complete)
//             </a>
//           </li>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               sources (not complete)
//             </a>
//           </li>
//           <li>
//             <a className="grey-text text-lighten-3" href="#!">
//               etc. (not complete)
//             </a>
//           </li>
//         </ul>
//       }
//       className="example"
//     >
//       <h5 className="white-text">Contact us</h5>
//       <p className="grey-text text-lighten-4">
//         Developers please contact us if you would like to sell your games on our
//         marketplace!
//       </p>
//     </Footer>
//   </div>
//   </div>
// );


}

export default AppRouter;
