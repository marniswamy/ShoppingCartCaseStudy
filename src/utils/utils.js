import * as _ from 'lodash';

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

export const filterProductsByMen = (products, menu) => {
    return products.filter(product => product.category === menu.category)
}

export const filterMenSubProducts = (products, menu) => {
    return products.filter(product => product.category === menu.category && product.subCategory === menu.subCategory)
}

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

export const getRemainingStock = (allProducts, cartItems, product) => {
    const totalStock = allProducts
        .find(item => item.productId === product.productId)
        .stock;
    const cartStock = cartItems
        .filter(item => item.productId === product.productId)
        .length;
    return totalStock - cartStock;
}