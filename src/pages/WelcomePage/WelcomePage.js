import * as React from 'react';
import {Link} from "react-router";

/**
 * WelcomePage is a plain component which is the landing page of teh app
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const WelcomePage  = () => (
    <div className="welcome-page">
        <h1>Welcome to Shopping Cart!</h1>
        <h3>
            Lets shop <Link to="/dashboard">here</Link>
        </h3>
    </div>
);
