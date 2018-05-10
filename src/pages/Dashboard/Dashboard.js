import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addItemToCart, selectedMenuItem} from '../../actions/cartActions';
import HeaderComponent from '../../components/Header'
import ProductList from '../../components/ProductList';
import {
    selectAvailableProducts, 
    selectCategories, 
    selectCartProducts,
    selectMenuState
} from '../../selectors/selectors';

class Dashboard extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            showMenu : true
        }
    }

    handleAddToCart = (productId) => {
        this.props.addItemToCart(productId);
    }

    handleSelectMenu = (category, subCategory) => {
        const menuItem = {
            category : category,
            subCategory : subCategory
        }
        this.props.selectedMenuItem(menuItem);
    }

    render() {
        const {cartItems, categories, availableProducts, selectedMenu} = this.props;
        return (
            <div>
                <HeaderComponent 
                    count={cartItems.length}
                    showMenu={this.state.showMenu}
                />
                <div className="body-container">
                    <ProductList
                        categories={categories}
                        products={availableProducts}
                        cartItems={cartItems}
                        selectedMenu={selectedMenu}
                        handleAddToCart={this.handleAddToCart}
                        handleSelectMenu={this.handleSelectMenu}
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
        cartItems: selectCartProducts(state),
        selectedMenu: selectMenuState(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: item => bindActionCreators(dispatch(addItemToCart(item))),
        selectedMenuItem: menuItem => bindActionCreators(dispatch(selectedMenuItem(menuItem)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);