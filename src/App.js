import React from 'react';
import './App.css';
import Login from "./components/user/sign-in";
import Register from "./components/user/sign-up";
import Product from "./components/products"
import ProductDetail from "./components/productDetail"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }
 
  render() {
    return (
      <div className="container">
        <Router>
          <div className="content bg-dark">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-auto" to="/product">Product</Link>
              </li>
            </ul>

          </div>
          <p>
            <button type="button" className="btn btn-danger btn-lg">
              <Link to='/sign-in'>Sign in
            </Link>
            </button>&nbsp;
        <button type="button" className="btn btn-secondary btn-lg" >
              <Link to='/sign-up'>
                Sign up
          </Link>
            </button>
          </p>
          <br />
          <Route exact path="/sign-in" component={Login}></Route>
          <Route path="/sign-up" component={Register}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/products/:idProduct" component={ProductDetail}></Route>
        </Router>
      </div>
    );
  }
}
export default App;
