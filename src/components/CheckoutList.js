import React, {Component} from 'react';
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid';
import Product from './Product';
import {Paper} from 'material-ui';

class CheckoutList extends Component {

    handleAddToCart = (item) => {
        // remove item
    }

    render() {
        const {products} = this.props;
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={8}>
                    <Paper>
                        <p className="product-title">Checkout Products</p>
                        <div className="product-list">
                            {products.map(item => <Product
                                key={item.productId}
                                product={item}
                                handleAddToCart={this.handleAddToCart}/>)
                            }
                        </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper>
                            <p className="product-title">Check out
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList);