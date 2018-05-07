import {productList} from '../data/availableProducts';

export const defaultInitialState = {
    cartItems: [],
    availableProducts: productList
}

export const shoppingCart = (state = defaultInitialState, payload) => {
    switch (payload.type) {
        case 'ADD_ITEM_TO_CART':
            const {item} = payload;
            const {cartItems} = state;
            const availableItems = cartItems;
            availableItems.push({item});
            return {
                ...state,
                cartItems: availableItems
            };
        default:
            return state;
    }
}