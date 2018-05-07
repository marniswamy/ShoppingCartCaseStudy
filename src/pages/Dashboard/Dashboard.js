import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import ProductList from '../../components/ProductList';
import {selectAvailableProducts, selectCategories, selectedProductsCount} from '../../selectors/selectors';

class Dashboard extends Component {
    render() {
        console.log("productCount", this.props.productCount);
        return (
            <div>
                <HeaderComponent
                  count={this.props.productCount}
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
    return {
        availableProducts: selectAvailableProducts(state),
        categories: selectCategories(state),
        productCount: selectedProductsCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);