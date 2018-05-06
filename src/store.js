import {createStore} from 'redux';
import rootReducer from './reducers';
import {productList} from './data/availableProducts';

export const defaultInitialState = {
    shoppingCart: [],
    availableProducts: productList
}

export default(initialState = defaultInitialState) => {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}