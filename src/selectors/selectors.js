import {createSelector} from 'reselect'
import * as _ from 'lodash';

const getState = (state) => state.shoppingCart;

export const selectAvailableProducts = createSelector([getState], (state) => {
    return state.availableProducts;
});

export const selectCategories = createSelector([selectAvailableProducts], (products) => {
    return _
        .chain(products)
        .groupBy('category')
        .toPairs()
        .map(function (currentItem) {
            return _.zipObject([
                'category', 'item'
            ], currentItem);
        })
        .value();
});

export const selectedProductsCount = createSelector(
    [getState], (state) => {
        console.log(' state.cartItems.length',  state.cartItems.length);
        return state.cartItems.length;
    }
);