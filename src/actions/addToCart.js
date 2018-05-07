export const addToCart = (item) => {
    return {type: 'addItem', item}
}

export const addItemToCart = (item) => {
    return {
        type: "ADD_ITEM_TO_CART",
        item
    }
}