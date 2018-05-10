import * as _ from 'lodash';

/**
 * formatDataBySubCategory method is used to format the data for
 * the sub categories in the dashboard
 * 
 * @param {Array} data as param, available data.
 * @returns {Array} categorized products data. 
 */
export const formatDataBySubCategory = (data) => {
    if (data.length) {
        return _
            .chain(data)
            .groupBy('subCategory')
            .toPairs()
            .map(function (currentItem) {
                return _.zipObject([
                    'subCategory', 'item'
                ], currentItem);
            })
            .value();
    }
    return [];
}

/**
 * filterProductsByMen method used to filter the subcategories under 
 * the main category for sub section in dashboard
 * 
 * @param {Array} products as a param
 * @param {Object} menu as a param
 * @returns {Array} categories and products as a param
 */
export const filterProductsByMen = (products, menu) => {
    return products.filter(product => product.category === menu.category)
}

/**
 * filterMenSubProducts method used to filter the subcategories under 
 * the main category for sub section in dashboard
 * 
 * @param {Array} products as a param
 * @param {Object} menu as a param
 * @returns {Array} categories and products as a param
 */
export const filterMenSubProducts = (products, menu) => {
    return products.filter(product => product.category === menu.category && product.subCategory === menu.subCategory)
}

/**
 * filterProducts method uses above to method to get the subsections
 * and corresponding products will dispaly on the right section
 * 
 * @param {Array} products as a param
 * @param {Object} menu as a param
 * @returns {Array} categories and products as a param
 */
export const filterProducts = (products, menu) => {
    if (_.isEmpty(menu)) {
        return products;
    }
    if (menu.category && menu.subCategory === undefined) {
        return filterProductsByMen(products, menu)
    }

    if (menu.category && menu.subCategory !== undefined) {
        return filterMenSubProducts(products, menu)
    }
    return products;
}

/**
 * groupCartProducts method is used to group the all card produts
 * to display in checkout section
 * 
 * @param {Array} products as a param 
 */
export const groupCartProducts = (products) => {
    return _
        .chain(products)
        .groupBy('productId')
        .toPairs()
        .map(function (currentItem) {
            return _.zipObject([
                'productId', 'item'
            ], currentItem);
        })
        .value();
}

/**
 * getRemainingStock method is used to calculate the available 
 * stock based on the total prodct stock and card product stock
 * 
 * @param {Array} allProducts as a param
 * @param {Array} cartItems as a param 
 * @param {Object} product  as a param
 * @returns {number} stock
 */
export const getRemainingStock = (allProducts, cartItems, product) => {
    const totalStock = allProducts
        .find(item => item.productId === product.productId)
        .stock;
    const cartStock = cartItems
        .filter(item => item.productId === product.productId)
        .length;
    return totalStock - cartStock;
}