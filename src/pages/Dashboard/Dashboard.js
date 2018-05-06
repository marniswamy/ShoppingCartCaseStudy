import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/Header'
import ProductList from '../../components/ProductList';
import {selectAvailableProducts, selectCategories} from '../../selectors/selectors';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <ProductList
                    categories={this.props.categories}
                    products={this.props.availableProducts}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        availableProducts: selectAvailableProducts(state),
        categories: selectCategories(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);