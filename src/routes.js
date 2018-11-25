import React from 'react';
import {Router, Route} from 'react-router';

import App from './app/App'
import Dashboard from './pages/Dashboard/Dashboard';
import { WelcomePage } from './pages/WelcomePage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { ErrorPage } from './pages/ErrorPage';

const Routes = (props) => {
    return ( 
        <Router {...props}>
          <Route component={App}>
            <Route path="/" component={WelcomePage} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/checkout" component={ShoppingCart}/>
            <Route path="*" component={ErrorPage}/>
          </Route> 
       </Router>
    )
}

export default Routes;