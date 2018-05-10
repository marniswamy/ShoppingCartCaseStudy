import React from 'react';
import Grid from 'material-ui/Grid';
import {Paper} from 'material-ui';
import ListViewComponent from '.././components/ListView';
import CheckoutAmount from './CheckoutAmount';

const CheckoutList = ({cartProducts, amount, handleDeleteFromCart, 
    isCouponApplicable, applicableCoupons, handleAppleCoupon, appliedCoupon}) => (
    <div className="product-container">
        <Grid container spacing={8}>
            <Grid item xs={12} sm={8}>
                <Paper>
                    <p className="product-title">Cart Products</p>
                    {cartProducts.length === 0 && 
                        <p className="product-title" >
                        Your cart is empty</p>
                    }
                    <div>
                        {cartProducts.map((product, index) => <ListViewComponent
                            key={index}
                            handleDeleteFromCart={handleDeleteFromCart}
                            product={product}/>)
}
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CheckoutAmount 
                amount={amount} 
                isCouponApplicable={isCouponApplicable}
                applicableCoupons={applicableCoupons}
                handleAppleCoupon={handleAppleCoupon}
                appliedCoupon={appliedCoupon}
                />
            </Grid>
        </Grid>
    </div>
)

export default CheckoutList;