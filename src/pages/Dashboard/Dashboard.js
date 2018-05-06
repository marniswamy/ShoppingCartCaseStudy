import React, {Component} from 'react';
import HeaderComponent from '../../components/Header'
import Cart from '../../components/Cart';
import {productList} from '../../data/availableProducts';

class Dashboard extends Component {
    render() {
        console.log('productList', productList);
        return (
            <div>
                <HeaderComponent/>
                <Cart/>
            </div>
        )
    }
}

export default Dashboard;