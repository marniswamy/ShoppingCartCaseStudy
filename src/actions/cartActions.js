export const addItemToCart = (item) => {
    return {type: "ADD_ITEM_TO_CART", item}
}

export const removeItemFromCart = (productId) => {
    return {type: "REMOVE_ITEM_FROM_CART", productId}
}

export const applyCouponOnCart = (coupon) => {
    return {type: "APPLY_COUPON", coupon}
}

export const selectedMenuItem = (menuItem) => {
    return {type: "SELETED_MENU", menuItem}
}

export const removeSingleItemFromCart = (selectedId) => {
    return {type: "REMOVE_SINGLE_ITEM", selectedId}
}