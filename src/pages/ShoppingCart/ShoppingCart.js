import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeItemFromCart} from '../../actions/cartActions';
import HeaderComponent from '../../components/Header'
import CheckoutList from '../../components/CheckoutList';
import {
    selectCartProducts, 
    selectTotalAmount,
    selectAtleastforFootwear
} from '../../selectors/selectors';

class ShoppingCart extends Component {

    handleDeleteFromCart = (item) => {
        this.props.removeItemFromCart(item)
    }

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
                    handleDeleteFromCart={this.handleDeleteFromCart}
                    isCouponApplicable={this.props.isAtleastOneFootwareIncart}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartProducts(state),
        totalAmount: selectTotalAmount(state),
        isAtleastOneFootwareIncart : selectAtleastforFootwear(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: item => bindActionCreators(dispatch(removeItemFromCart(item)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
