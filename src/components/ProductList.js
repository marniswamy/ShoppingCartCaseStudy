import React, {Fragment} from 'react';
import {random} from 'lodash';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Product from './Product';
import Title from './Title';
import {Paper, ListItem, List, ListItemText} from 'material-ui';
import {formatDataBySubCategory, filterProducts} from '../utils/utils';

const ProductList = ({
    categories,
    products,
    cartItems,
    handleAddToCart,
    handleSelectMenu,
    selectedMenu
}) => (
    <div className="product-container">
        <Grid container spacing={8}>
            <Hidden only={['xs', 'sm']}>
                <Grid item xs={12} sm={2}>
                    <Paper>
                        <h3 className="product-title">Categories</h3>
                        <List component="ul">
                            <ListItem button onClick={() => handleSelectMenu()}>
                                <ListItemText primary={'All'}/>
                            </ListItem>
                        </List>
                        {categories.map(([group, categories]) => <Fragment key={group}>
                            <ListItem button className="list-head" onClick={() => handleSelectMenu(group)}>
                                <ListItemText primary={group}/>
                            </ListItem>
                            <List component="ul">
                                {formatDataBySubCategory(categories).map(item => <ListItem
                                    key={random(0, 500)}
                                    onClick={() => handleSelectMenu(group, item.subCategory)}
                                    button>
                                    <ListItemText primary={item.subCategory}/>
                                </ListItem>)}
                            </List>
                        </Fragment>)}
                    </Paper>
                </Grid>
            </Hidden>
            <Grid item xs={12}>
                <Paper>
                    <Title selectedMenu={selectedMenu}/>
                    <div className="product-list">
                        {filterProducts(products, selectedMenu).map(item => <Product
                            key={item.productId}
                            product={item}
                            allProducts={products}
                            cartItems={cartItems}
                            handleAddToCart={handleAddToCart}/>)}
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
)

export default ProductList;