import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as CartActions from '../actions/addToCart';
import ProductList from './ProductList';

class Cart extends Component {
    render() {
        return (
            <div>
                <ProductList addItem={this.props.action.addToCart}/>
                <h2>Cart Items</h2>
                <ul>
                    {this
                        .props
                        .cart
                        .map((item, id) => {
                            return <li key={id}>{item}</li>
                        })
}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {cart: state.shoppingCart}
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);