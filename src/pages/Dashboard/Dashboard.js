import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import HeaderComponent from '../../components/Header'
import ProductList from '../../components/ProductList';
import {addItemToCart} from '../../actions/addToCart';
import {selectAvailableProducts, selectCategories, selectCartProducts} from '../../selectors/selectors';

class Dashboard extends Component {

    handleAddToCart = (item) => {
        this.props.addItemToCart(item);
    }

    render() {
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
                        handleAddToCart={this.handleAddToCart}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {availableProducts: selectAvailableProducts(state), categories: selectCategories(state), cartItems: selectCartProducts(state)}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: item => bindActionCreators(dispatch(addItemToCart(item)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);