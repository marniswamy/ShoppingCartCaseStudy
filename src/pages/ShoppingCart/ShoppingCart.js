import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import CheckoutList from '../../components/CheckoutList';
import {selectCartProducts} from '../../selectors/selectors';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <HeaderComponent
                  count={this.props.cartItems.length}
                />
                <div className="body-container">
                <CheckoutList
                    products={this.props.cartItems}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartProducts(state)
    }
}
export default connect(mapStateToProps)(ShoppingCart);
