import React from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CurrencyFormatter from './CurrencyFormatter';
import {getRemainingStock} from '../utils/utils';
import Grid from 'material-ui/Grid';

const styles = {
    title: {
        marginBottom: 16,
        fontSize: 14,
        fontWeight: 600,
        minHeight: 86
    }
};

const ProductComponent = ({classes, product, handleAddToCart, allProducts, cartItems}) => {
    return (
        <Grid item xs={12} sm={4} md={3} lg={3}>
            <Card className="product-card">
                <CardContent>
                    <Typography className={classes.title} color="primary">
                        {product.name}
                    </Typography>
                    {!getRemainingStock(allProducts, cartItems, product)
                        ? <Typography component="p" color="secondary">
                                Out of stock
                            </Typography>
                        : <Typography component="p">
                            Available in Stock : {getRemainingStock(allProducts, cartItems, product)}
                        </Typography>
}
                </CardContent>
                <CardActions className="card-actions">
                    <Typography component="p">
                        Price :
                        <CurrencyFormatter amount={product.price}/>
                    </Typography>
                    <Button
                        variant="raised"
                        color="primary"
                        size="small"
                        disabled={product.stock <= 0 || !getRemainingStock(allProducts, cartItems, product)}
                        onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default withStyles(styles)(ProductComponent);