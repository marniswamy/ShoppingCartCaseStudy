import React from 'react';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CurrencyFormatter from './CurrencyFormatter';

const styles = {
    title: {
        marginBottom: 16,
        fontSize: 14,
        fontWeight: 600
    }
};

const ProductComponent = (props) => {
    const {classes, product, handleAddToCart} = props;
    return (
        <div>
            <Card className="product-card">
                <CardContent>
                    <Typography className={classes.title} color="primary">
                        {product.name}
                    </Typography>
                    <Typography component="p">
                        Available stock : {product.stock}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography component="p">
                        Price :
                        <CurrencyFormatter amount={product.price}/>
                    </Typography>
                    <Button variant="raised" color="primary" size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    );
}


export default withStyles(styles)(ProductComponent);