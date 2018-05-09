import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {Paper, Button} from 'material-ui';
import Typography from 'material-ui/Typography';
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
                         <div className="coupon-section">
                         <Typography variant="title" gutterBottom>
                             Coupons available
                        </Typography>
                        <Typography gutterBottom >
                            {`
                             1. £5.00 off your order 
                            `}
                         </Typography>
                         <Typography gutterBottom >
                            {`
                             2. £10.00 off when you spend over £50.00 
                            `}
                         </Typography>
                         <Typography gutterBottom >
                            {`
                             3. £15.00 off when you have bought at least one footwear item and spent
                             over £75.00
                            `}
                         </Typography>
                         </div>
                         <p className="product-title">Payable Amount : 
                         <CurrencyFormatter amount={amount}/>
                         <Typography variant="caption" gutterBottom align="left">
                             After applicable discounts
                        </Typography>
                      </p>
                      <p align="right">
                      <Button variant="raised" color="primary">
                        Place Order
                      </Button>
                      </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default CheckoutList;