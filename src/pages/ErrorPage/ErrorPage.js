import * as React from 'react';
import {Link} from "react-router";

/**
 * ErrorPage component is used to when the user gives the invalid path then
 * the page will navigate to this page
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const ErrorPage = () => (
    <div className="welcome-page">
        <h1>Oops something went wrong!</h1>
        <h3>Start <Link to="/">shop</Link> again</h3>
    </div>
);