import React from 'react';
import {Router, Route} from 'react-router';

import App from './app/App'
import Dashboard from './pages/Dashboard/Dashboard';
import Welcome from './pages/Welcome/Welcome';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import NotFount from './pages/NotFound/NotFound';

const Routes = (props) => {
    return ( 
        <Router {...props}>
          <Route component={App}>
            <Route path="/" component={Welcome} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/checkout" component={ShoppingCart}/>
            <Route path="*" component={NotFount}/>
          </Route> 
       </Router>
    )
}

export default Routes;