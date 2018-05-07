import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import ProductList from '../../components/ProductList';
import {selectAvailableProducts, selectCategories, selectCartItems} from '../../selectors/selectors';

class Dashboard extends Component {
    render() {
        console.log("cartItems", this.props.cartItems);
        return (
            <div>
                <HeaderComponent
                   count={this.props.cartItems.length}
                />
                <div className="body-container">
                <ProductList
                    categories={this.props.categories}
                    products={this.props.availableProducts}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state.shoppingCart.cartItems.length);
    return {
        availableProducts: selectAvailableProducts(state),
        categories: selectCategories(state),
        cartItems: selectCartItems(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);