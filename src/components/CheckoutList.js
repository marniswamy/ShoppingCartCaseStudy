import React from 'react';
import Grid from 'material-ui/Grid';
import {Paper} from 'material-ui';
import ListViewComponent from '.././components/ListView';
import CheckoutAmount from './CheckoutAmount';
import {groupCartProducts} from '../utils/utils';

const CheckoutList = ({
    cartProducts,
    amount,
    handleDeleteFromCart,
    handleAddToCart,
    allProducts,
    isCouponApplicable,
    applicableCoupons,
    handleAppleCoupon,
    handleSingleItemDelete,
    appliedCoupon
}) => (
    <Grid container spacing={8}>
        <Grid item xs={12} sm={8}>
            <Paper>
                <h3 className="product-title">Cart Products</h3>
                {cartProducts.length === 0 && <p className="product-title">
                    Your cart is empty</p>
                }
                <div>
                    {groupCartProducts(cartProducts).map((cartItem, index) => <ListViewComponent
                        key={index}
                        cartProducts={cartProducts}
                        handleDeleteFromCart={handleDeleteFromCart}
                        handleAddToCart={handleAddToCart}
                        handleSingleItemDelete={handleSingleItemDelete}
                        product={cartItem}
                        allProducts={allProducts}/>)}
                </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
            <CheckoutAmount
                amount={amount}
                isCouponApplicable={isCouponApplicable}
                applicableCoupons={applicableCoupons}
                handleAppleCoupon={handleAppleCoupon}
                appliedCoupon={appliedCoupon}/>
        </Grid>
    </Grid>
)

export default CheckoutList;