import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import ProductList from '../../components/ProductList';
import {selectAvailableProducts, selectCategories, selectCartProducts} from '../../selectors/selectors';

class Dashboard extends Component {
    render() {
        console.log('cartItems', this.props.cartItems);
        const {cartItems, categories, availableProducts} = this.props;
        return (
            <div>
                <HeaderComponent
                   count={cartItems.length}
                />
                <div className="body-container">
                <ProductList
                    categories={categories}
                    products={availableProducts}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        availableProducts: selectAvailableProducts(state),
        categories: selectCategories(state),
        cartItems: selectCartProducts(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);