import React from 'react';
import {Link} from 'react-router';

const NotFound = () => (
    <div className="welcome-page">
        <h1>Oops something went wrong!</h1>
        <h3>
            Go to
            <Link to="/">Welcome</Link>
            page</h3>
    </div>
);

export default NotFound;
