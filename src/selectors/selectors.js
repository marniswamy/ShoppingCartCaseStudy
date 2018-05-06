import {createSelector} from 'reselect'

const getState = (state) => state;

export const selectAvailableProducts = createSelector([getState], (state) => {
    return state.availableProducts;
});