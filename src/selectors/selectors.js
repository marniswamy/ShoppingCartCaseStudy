import {createSelector} from 'reselect'

const getApplicationState = (state) => state.shoppingCart;

export const selectAvailableProducts = createSelector([getApplicationState], (state) => {
    return state.availableProducts;
});

export const selectCategories = createSelector([selectAvailableProducts], (products) => {
    return Object.entries(products.reduce((products, product) => {
        const { category } = product;
        products[category] = products[category]
         ? [...products[category], product]
         :
         [product]
         return products;
    }, {}))
});

export const selectCartProducts = createSelector(
    [getApplicationState], (cart) => {
        return cart.cartItems
    }
);


export const selectTotalAmount = createSelector(
    [selectCartProducts], (product) => {
        if(product.length) {
            return product.map(item => item.price).reduce((acc, val) => acc + val);
        }
        return 0;
    }
);

export const selectAtleastforFootwear = createSelector(
    [selectCartProducts], (cartItems) => {
        return !!cartItems.filter(item => item.subCategory === 'Footware').length
    }
);

export const isEligiblForCouponOne = createSelector(
    [selectTotalAmount], (amount) => {
        return (amount > 0);
    } 
);

export const isEligiblForCouponTwo = createSelector(
    [selectTotalAmount], (amount) => {
        return (amount > 50);
    } 
);

export const isEligiblForCouponThree = createSelector(
    [selectTotalAmount, selectAtleastforFootwear],
     (amount, hasFootware) => {
        return (amount > 75 && hasFootware);
    } 
);

export const selectEligibleCoupons = createSelector(
    [
        isEligiblForCouponOne, 
        isEligiblForCouponTwo,
        isEligiblForCouponThree
    ],
    (
        couponFive,
        couponTen,
        couponTeen
    ) => {
       return [
            {
                couponOne : couponFive,
                couponTwo : couponTen,
                couponThree : couponTeen
            },
           
        ]
    }
);

export const selectAppliedCoupon = createSelector(
    [getApplicationState], (state) => {
    return state.appliedCoupon;
});

export const selectMenuState = createSelector(
    [getApplicationState], (state) => {
    return state.selectedMenu;
});