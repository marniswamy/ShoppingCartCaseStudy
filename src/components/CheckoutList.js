import React, {Component} from 'react';
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid';
import Product from './Product';
import {Paper} from 'material-ui';

const styles = {
    Paper: {
        padding: 20,
        marginBottom: 10
    }
}

class CheckoutList extends Component {

    handleAddToCart = (item) => {
        // remove item
    }

    render() {
        const {products} = this.props;
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={10}>
                        <p className="product-title">Checkout Products</p>
                        <div className="product-list">
                            {products.map(item => <Product
                                key={item.productId}
                                product={item}
                                handleAddToCart={this.handleAddToCart}/>)
                            }
                        </div>
                    </Grid>
                    <Grid  item xs={12} sm={2}>
                    <Paper style={styles.paper}>
                        <p className="product-title">Check out </p>
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
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList);