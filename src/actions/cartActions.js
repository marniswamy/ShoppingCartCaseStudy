/**
 * addItemToCart action method is used to 
 * add the selected item to the cart.
 * 
 * @param {String} item as a param
 */
export const addItemToCart = (item) => {
    return {type: "ADD_ITEM_TO_CART", item}
}

/**
 * removeItemFromCart action method is used to 
 * remove the selected item from the cart.
 * 
 * @param {String} item as a param
 */
export const removeItemFromCart = (productId) => {
    return {type: "REMOVE_ITEM_FROM_CART", productId}
}

/**
 * applyCouponOnCart action method is used to 
 * save the applied coupon details.
 * 
 * @param {Object} item as a param
 */
export const applyCouponOnCart = (coupon) => {
    return {type: "APPLY_COUPON", coupon}
}

/**
 * selectedMenuItem action method is used to 
 * set the selected menu in the state.
 * 
 * @param {Object} item as a param
 */
export const selectedMenuItem = (menuItem) => {
    return {type: "SELETED_MENU", menuItem}
}

/**
 * removeSingleItemFromCart action method is used to 
 * remove the individual item from the
 * group of same products.
 * 
 * @param {String} selectedId as a param
 */
export const removeSingleItemFromCart = (selectedId) => {
    return {type: "REMOVE_SINGLE_ITEM", selectedId}
}