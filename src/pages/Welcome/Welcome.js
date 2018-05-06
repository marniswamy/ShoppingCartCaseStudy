import React, {Component} from 'react';
import {Link} from 'react-router';

class Welcome extends Component {

    render() {
        return (
            <div className="welcome-page">
            <h1>Welcome to Shopping Cart!</h1>
              <h3> Lets start from <Link to="/dashboard">here</Link></h3>
            </div>
        );
    }
}

export default Welcome;
