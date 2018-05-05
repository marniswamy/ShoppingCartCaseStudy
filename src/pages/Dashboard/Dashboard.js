import React, {Component} from 'react';
import HeaderComponent from '../../components/Header'
import Cart from '../../components/Cart';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <Cart/>
            </div>
        )
    }
}

export default Dashboard;