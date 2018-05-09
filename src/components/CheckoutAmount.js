import React from 'react';
import {
    Paper,
    Button,
    Typography,
} from 'material-ui';
import CurrencyFormatter from './CurrencyFormatter';
import { getAmountAfterDiscount } from '../utils/utils';


const CheckoutAmount = ({amount, isCouponApplicable}) => (
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
            <Typography gutterBottom>
                {`
     1. £5.00 off your order 
    `}
            </Typography>
            <Typography gutterBottom>
                {`
     2. £10.00 off when you spend over £50.00 
    `}
            </Typography>
            <Typography gutterBottom>
                {`
     3. £15.00 off when you have bought at least one footwear item and spent
     over £75.00
    `}
            </Typography>
        </div>
        <p className="product-title">Payable Amount :
            <CurrencyFormatter amount={getAmountAfterDiscount(amount, isCouponApplicable)}/>
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
