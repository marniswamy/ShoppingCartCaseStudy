import React from 'react';
import {Link} from 'react-router';

const Welcome = () => (
    <div className="welcome-page">
        <h1>Welcome to Shopping Cart!</h1>
        <h3>
            Lets start <Link to="/dashboard">here</Link>
        </h3>
    </div>
);

export default Welcome;