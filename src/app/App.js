import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p>
          <Link to="/checkout">Shopping Cart</Link>
        </p>
        <p>
          <Link to="/notexist">Not Exist</Link>
        </p>
      </div>
    );
  }
}

export default App;
