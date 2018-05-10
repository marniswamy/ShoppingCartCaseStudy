import {productList} from '../data/availableProducts';
import remove from 'lodash/remove';

export const defaultInitialState = {
    cartItems: [],
    availableProducts: productList,
    appliedCoupon: null,
    selectedMenu: {}
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
