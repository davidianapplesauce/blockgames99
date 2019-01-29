import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import ProductPage from "./components/product"
import AppRouter from "./AppRouter"
ReactDOM.render(
  <AppRouter>
  <App />
  </AppRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
