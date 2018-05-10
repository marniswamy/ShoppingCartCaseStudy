import {createSelector} from 'reselect'

const getApplicationState = (state) => state.shoppingCart;

/**
  selectAvailableProducts selector is used to get the all available
  products from the store
 */
export const selectAvailableProducts = createSelector([getApplicationState], (state) => {
    return state.availableProducts;
});

/**
  selectCategories selector is used to categorise the all products for the men and women
  categories for displaing in dashboard left pane.
 */
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


/**
  selectCartProducts selector is used to get the items which are added to cart
 */
export const selectCartProducts = createSelector(
    [getApplicationState], (cart) => {
        return cart.cartItems
    }
);

/**
  selectTotalAmount selector is used to get the sum of total amount of the 
  selected products in cart
 */
export const selectTotalAmount = createSelector(
    [selectCartProducts], (product) => {
        if(product.length) {
            return product.map(item => item.price).reduce((acc, val) => acc + val);
        }
        return 0;
    }
);

/**
  selectAtleastforFootwear selector is to check if atleast one footware product 
  added to cart or not
 */
export const selectAtleastforFootwear = createSelector(
    [selectCartProducts], (cartItems) => {
        return !!cartItems.filter(item => item.subCategory === 'Footware').length
    }
);

/**
  isEligiblForCouponOne selector is to check if the cart product is eligible to 
  apply the 5 ponds off coupon or not.
 */
export const isEligiblForCouponOne = createSelector(
    [selectTotalAmount], (amount) => {
        return (amount > 0);
    } 
);

/**
  isEligiblForCouponTwo selector is to check if the cart product is eligible to 
  apply the 10 ponds off coupon or not. In this case the cart amount should 
  greater than 50 pounds
 */
export const isEligiblForCouponTwo = createSelector(
    [selectTotalAmount], (amount) => {
        return (amount > 50);
    } 
);

/**
  isEligiblForCouponThree selector is to check if the cart product is eligible to 
  apply the 15 ponds off coupon or not. In this case the cart amount should 
  greater than 75 pounds and atleast one footware needs to added to cart
 */
export const isEligiblForCouponThree = createSelector(
    [selectTotalAmount, selectAtleastforFootwear],
     (amount, hasFootware) => {
        return (amount > 75 && hasFootware);
    } 
);


/**
  selectEligibleCoupons selector is just returning all 
  available coupons as an object
 */
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


/**
  selectAppliedCoupon selector is to check 
  if the coupon applied on cart or not.
 */
export const selectAppliedCoupon = createSelector(
    [getApplicationState], (state) => {
    return state.appliedCoupon;
});

/**
  selectMenuState selector is to get the menu state in the
  dashboard.
 */
export const selectMenuState = createSelector(
    [getApplicationState], (state) => {
    return state.selectedMenu;
});