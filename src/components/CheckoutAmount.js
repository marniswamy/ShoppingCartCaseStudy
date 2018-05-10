import React from 'react';
import {Paper, Button, Typography} from 'material-ui';
import CurrencyFormatter from './CurrencyFormatter';
import Coupons from './Coupons';

const CheckoutAmount = ({amount, isCouponApplicable, applicableCoupons, handleAppleCoupon, appliedCoupon}) => (
    <Paper>
        <h3 className="product-title">Check out</h3>
        <p className="product-title">Total Amount :
            <CurrencyFormatter amount={amount}/>
        </p>
        <h5 className="hint">Your order is eligible for one of the below coupons</h5>
        <div className="coupon-section">
            <Coupons
                applicableCoupons={applicableCoupons}
                handleAppleCoupon={handleAppleCoupon}
                appliedCoupon={appliedCoupon}
                />
                {  !!appliedCoupon && !!amount &&
            <div className="coupon-applied">
                <h5> 
                     <p className="wish"> Congratulation !!!</p>
                    <CurrencyFormatter amount={appliedCoupon}/> OFF coupon applied on you total amount !  
                </h5>
            </div>
                }
        </div>
        <p className="product-title">Payable Amount :
            <CurrencyFormatter amount={amount && amount - appliedCoupon}/>
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
