import {productList} from '../data/availableProducts';
import remove from 'lodash/remove';

export const defaultInitialState = {
    cartItems: [],
    availableProducts: productList
}

export const shoppingCart = (state = defaultInitialState, payload) => {
    switch (payload.type) {
        case 'ADD_ITEM_TO_CART':
            const {item} = payload;
            const {cartItems} = state;
            const availableItems = cartItems.slice();
            availableItems.push(item);
            return {
                ...state,
                cartItems: availableItems
            };
        case 'REMOVE_ITEM_FROM_CART':
        const {productId} = payload;
        const updatedItems = remove(state.cartItems.filter(product => product.productId !== productId));
        return {
            ...state,
            cartItems: updatedItems
        }
        default:
            return state;
    }
}
