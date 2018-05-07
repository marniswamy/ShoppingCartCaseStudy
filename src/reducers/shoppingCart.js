import {productList} from '../data/availableProducts';

export const defaultInitialState = {
    cartItems: [],
    availableProducts: productList
}

export default(state = defaultInitialState, payload) => {
    switch (payload.type) {
        case 'addItem':
            return [
                ...state,
                payload.item

            ];
        case 'ADD_ITEM_TO_CART':
            const {item} = payload;
            console.log('payload.item', item, state);
            const newItems = state
                .cartItems
                .push(item);
            console.log('newItems', newItems);
            return state;
        default:
            return state;
    }
}