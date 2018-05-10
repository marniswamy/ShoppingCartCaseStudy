import React, {Fragment} from 'react';
import Grid from 'material-ui/Grid';
import Product from './Product';
import Title from './Title';
import {Paper, ListItem, List, ListItemText} from 'material-ui';
import {formatDataBySubCategory, filterProducts} from '../utils/utils';

const ProductList = ({categories, products, handleAddToCart, handleSelectMenu, selectedMenu}) => (
    <div className="product-container">
        <Grid container spacing={8}>
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
                            {formatDataBySubCategory(categories).map(item => 
                                <ListItem
                                key={item.productId}
                                onClick={() => handleSelectMenu(group, item.subCategory)}
                                button
                                >
                                <ListItemText primary={item.subCategory}/>
                            </ListItem>)}
                        </List>
                    </Fragment>)}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Paper>
                  <Title selectedMenu={selectedMenu} />
                    <div className="product-list">
                        {filterProducts(products, selectedMenu).map(item => <Product key={item.productId} product={item} handleAddToCart={handleAddToCart}/>)}
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
)

export default ProductList;