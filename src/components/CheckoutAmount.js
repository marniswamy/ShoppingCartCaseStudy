import React from 'react';
import {Paper, Button, Typography} from 'material-ui';
import CurrencyFormatter from './CurrencyFormatter';
import Coupons from './Coupons';

const CheckoutAmount = ({amount, isCouponApplicable, applicableCoupons, handleAppleCoupon, appliedCoupon}) => (
    <Paper>
        <p className="product-title">Check out
        </p>
        <p className="product-title">Total Amount :
            <CurrencyFormatter amount={amount}/>
        </p>
        <div className="coupon-section">
            <Coupons
                applicableCoupons={applicableCoupons}
                handleAppleCoupon={handleAppleCoupon}
                appliedCoupon={appliedCoupon}
                />
            <div className="coupon-applied">
                <h5>Your order is eligible for one of the coupons</h5>
            </div>
        </div>
        <p className="product-title">Payable Amount :
            <CurrencyFormatter amount={amount - appliedCoupon}/>
            <Typography variant="caption" gutterBottom align="left">
                After applicable discounts
            </Typography>
        </p>
        <p className="order-button">
            <Button variant="raised" color="primary" disabled={!amount}>
                Place Order
            </Button>
        </p>
    </Paper>
);

export default CheckoutAmount;
