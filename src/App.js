import React, { Component } from "react";
import Product from "./container/Product";
import Login from "./container/Login";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetails from "./container/ProductDetails";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: 0,
    };
  }

  changeIsLoggedIn = (value) => {
    this.setState({ isLoggedIn: value });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <>
        {isLoggedIn ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/:product_id" element={<ProductDetails />} />
              
            </Routes>
          </BrowserRouter>
        ) : (
          <Login changeIsLoggedIn={this.changeIsLoggedIn} />
        )}
      </>
    );
  }
}
