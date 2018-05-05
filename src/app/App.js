import React, {Component} from 'react';
import Cart from '../components/Cart';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart/>
        <p><Link to="/dashboard">Dashboard</Link></p>
         <p><Link to="/checkout">Shopping Cart</Link></p>
         <p><Link to="/notexist">Not Exist</Link></p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
