import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';
import {productList} from '../data/availableProducts';

class App extends Component {

  render() {
    console.log('productList', productList);
    return (
      <div className="App">
        {this.props.children}
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
      </div>
    );
  }
}

export default App;
