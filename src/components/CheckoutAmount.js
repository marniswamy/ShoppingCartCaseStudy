import React from 'react';
import {Paper, Typography} from 'material-ui';
import CurrencyFormatter from './CurrencyFormatter';
import Coupons from './Coupons';
import FinaliseOrder from './FinaliseOrder';

const CheckoutAmount = ({amount, isCouponApplicable, applicableCoupons, handleAppleCoupon, appliedCoupon}) => (
    <Paper>
        <h3 className="product-title">Check out</h3>
        <p className="product-title">Total Amount :
            <CurrencyFormatter amount={amount}/>
        </p>
        <h5 className="hint">Your order is eligible for one of the below coupons</h5>
        <div className="coupon-section">
            <Coupons
                amount={amount}
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
        <div className="order-button">
            <FinaliseOrder amount={amount} />
        </div>
    </Paper>
);

export default CheckoutAmount;
