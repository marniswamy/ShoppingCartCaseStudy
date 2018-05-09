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

