import {productList} from '../data/availableProducts';
import remove from 'lodash/remove';

/**
 * defaultInitialState is the initial state of our redux store. 
 * It has availableProducts default we are loading from local object
 * and cartItems is the array taken to store the seleted item into the
 * cart. Similarly appliedCoupon and selectedMenu variables taken in 
 * the store for our local preferences.
 */
export const defaultInitialState = {
    cartItems: [],
    availableProducts: productList,
    appliedCoupon: null,
    selectedMenu: {}
}


/**
 * shoppingCart method is used to handle the actions types based the
 * conditions written.
 * 
 * @param {Object} state as a param 
 * @param {Object} payload as a param
 * @returns {Object} returns the state object. 
 */
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
        case 'APPLY_COUPON':
            const {coupon} = payload;
            return {
                ...state,
                appliedCoupon: coupon
            }
        case 'SELETED_MENU':
            const {menuItem} = payload;
            return {
                ...state,
                selectedMenu: menuItem
            }
        case 'REMOVE_SINGLE_ITEM':
            const {selectedId} = payload;
            const filteredItems = state
                .cartItems
                .filter(item => item.productId === selectedId)
                .slice(0, -1);
            const updateItems = state
                .cartItems
                .filter(item => item.productId !== selectedId)
                const finalList = [
                ...updateItems,
                ...filteredItems
            ]
            return {
                ...state,
                cartItems: finalList
            }
        default:
            return state;
    }
}
