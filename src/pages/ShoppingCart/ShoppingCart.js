import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import CheckoutList from '../../components/CheckoutList';
import {selectCartItems} from '../../selectors/selectors';

class ShoppingCart extends Component {
    render() {
        console.log("cartItems", this.props.cartItems);
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
        cartItems: selectCartItems(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
