import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    removeItemFromCart, 
    applyCouponOnCart,
    addItemToCart,
    removeSingleItemFromCart
    } from '../../actions/cartActions';
import HeaderComponent from '../../components/Header'
import CheckoutList from '../../components/CheckoutList';
import {
    selectCartProducts, 
    selectTotalAmount,
    selectAtleastforFootwear,
    selectEligibleCoupons,
    selectAppliedCoupon,
    selectAvailableProducts
} from '../../selectors/selectors';

class ShoppingCart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMenu : false
        }
    }

    handleDeleteFromCart = (item) => {
        this.props.removeItemFromCart(item)
    }

    handleAppleCoupon = (coupon) => {
        this.props.applyCouponOnCart(coupon);
    }

    handleAddToCart = (productId) => {
        this.props.addItemToCart(productId);
    }

    handleSingleItemDelete = (productId) => {
        this.props.removeSingleItemFromCart(productId);
    }

    render() {
        return (
            <div>
                <HeaderComponent
                  count={this.props.cartItems.length}
                  showMenu={this.state.showMenu}
                />
                <div className="body-container">
                <CheckoutList
                    cartProducts={this.props.cartItems}
                    amount={this.props.totalAmount}
                    handleDeleteFromCart={this.handleDeleteFromCart}
                    isCouponApplicable={this.props.isAtleastOneFootwareIncart}
                    applicableCoupons={this.props.applicableCoupons}
                    handleAppleCoupon={this.handleAppleCoupon}
                    appliedCoupon={this.props.appliedCoupon}
                    handleAddToCart={this.handleAddToCart}
                    allProducts={this.props.availableProducts}
                    handleSingleItemDelete={this.handleSingleItemDelete}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        availableProducts: selectAvailableProducts(state), 
        cartItems: selectCartProducts(state),
        totalAmount: selectTotalAmount(state),
        isAtleastOneFootwareIncart : selectAtleastforFootwear(state),
        applicableCoupons: selectEligibleCoupons(state),
        appliedCoupon: selectAppliedCoupon(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: item => bindActionCreators(dispatch(removeItemFromCart(item))),
        applyCouponOnCart: coupon => bindActionCreators(dispatch(applyCouponOnCart(coupon))),
        addItemToCart: item => bindActionCreators(dispatch(addItemToCart(item))),
        removeSingleItemFromCart: item => bindActionCreators(dispatch(removeSingleItemFromCart(item))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
