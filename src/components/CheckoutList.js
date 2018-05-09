import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {Paper} from 'material-ui';
import CurrencyFormatter from './CurrencyFormatter';
import ListViewComponent from '.././components/ListView';

class CheckoutList extends Component {

    render() {
        const {cartProducts, amount} = this.props;
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={8}>
                    <Paper>
                        <p className="product-title">Cart Products</p>
                        <div>
                        {
                            cartProducts.map(product => 
                                <ListViewComponent
                                  key={product.productId}
                                  product={product}
                                />
                            )
                        }
                        </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper>
                            <p className="product-title">Check out
                            </p>
                            <p className="product-title">Total Amount : 
                            <CurrencyFormatter amount={amount}/>
                         </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default CheckoutList;