import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import CheckoutList from '../../components/CheckoutList';
import {selectCartProducts, selectTotalAmount} from '../../selectors/selectors';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <HeaderComponent
                  count={this.props.cartItems.length}
                />
                <div className="body-container">
                <CheckoutList
                    cartProducts={this.props.cartItems}
                    amount={this.props.totalAmount}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartProducts(state),
        totalAmount: selectTotalAmount(state)
    }
}
export default connect(mapStateToProps)(ShoppingCart);
