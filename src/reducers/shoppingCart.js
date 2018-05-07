import {productList} from '../data/availableProducts';
import { merge } from 'lodash';


export const defaultInitialState = {
    cartItems: [],
    availableProducts: productList
}

export const shoppingCart = (state = defaultInitialState, payload) => {
    switch (payload.type) {
        case 'addItem':
            return [
                ...state,
                payload.item

            ];
        case 'ADD_ITEM_TO_CART':
           const {item} = payload;
           const { cartItems } = state;
           const availableItems = cartItems;
           Array.prototype.push.apply(availableItems, [item]);
           return merge(state, {cartItems: availableItems}); 
        default:
            return state;
    }
}