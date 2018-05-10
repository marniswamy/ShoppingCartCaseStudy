import React from 'react';
import {Button, Tooltip, Typography} from 'material-ui';
import {availableCoupons} from '../constants/constants';

/*
TODO : Need to move buttons to map
*/
const Coupons = ({applicableCoupons, handleAppleCoupon, appliedCoupon}) => (
    <div className="coupons">
        <Tooltip
            id="tooltip-top"
            title={availableCoupons[0].description}
            placement="right">
            <div>
                <Button
                    color="secondary"
                    variant="raised"
                    disabled={!applicableCoupons[0].couponOne || (availableCoupons[0].value === appliedCoupon)}
                    onClick={() => handleAppleCoupon(availableCoupons[0].value)}>
                    {availableCoupons[0].title}
                </Button>
            </div>
        </Tooltip>
        <Tooltip
            id="tooltip-top"
            title={availableCoupons[1].description}
            placement="right">
            <div>
                <Button
                    color="secondary"
                    variant="raised"
                    disabled={!applicableCoupons[0].couponTwo || (availableCoupons[1].value === appliedCoupon)}
                    onClick={() => handleAppleCoupon(availableCoupons[1].value)}>
                    {availableCoupons[1].title}
                </Button>
            </div>
        </Tooltip>
        <Tooltip
            id="tooltip-top"
            title={availableCoupons[2].description}
            placement="bottom">
            <div>
                <Button
                    color="secondary"
                    variant="raised"
                    disabled={!applicableCoupons[0].couponThree || (availableCoupons[2].value === appliedCoupon)}
                    onClick={() => handleAppleCoupon(availableCoupons[2].value)}>
                    {availableCoupons[2].title}
                </Button>
            </div>
        </Tooltip>
        {!!appliedCoupon && <Typography
            variant="caption"
            className="remove-link"
            gutterBottom
            onClick={() => handleAppleCoupon(0)}>
            Remove Coupon
        </Typography>
}
    </div>
);

export default Coupons;