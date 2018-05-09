import React, { Fragment} from 'react';
import Grid from 'material-ui/Grid';
import Product from './Product';
import {Paper, ListItem, List, Typography, ListItemText} from 'material-ui';

const ProductList = ({categories, products, handleAddToCart}) => (
        <div className="product-container">
            <Grid container spacing={8}>
                <Grid item xs={12} sm={2}>
                    <Paper>
                        <p className="product-title">Categories</p>
                        {categories.map(([group, categories]) => <Fragment key={group}>
                            <Typography className="headline" variant="subheading">
                                {group}
                            </Typography>
                            <List component="ul">
                                {categories.map(item => <ListItem button key={item.productId}>
                                    <ListItemText primary={item.subCategory}/>
                                </ListItem>)}
                            </List>
                        </Fragment>)}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Paper>
                        <p className="product-title">Available Products</p>
                        <div className="product-list">
                            {products.map(item => <Product
                                key={item.productId}
                                product={item}
                                handleAddToCart={handleAddToCart}/>)
                            }
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )


export default ProductList;