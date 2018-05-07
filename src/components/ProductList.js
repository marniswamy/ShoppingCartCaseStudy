import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid';
import Product from './Product';
import {addItemToCart} from '../actions/addToCart';
import {Paper, ListItem, List, Typography, ListItemText} from 'material-ui';

const styles = {
    Paper: {
        padding: 20,
        marginBottom: 10
    }
}

class ProductList extends Component {
    handleAddToCart = (item) => {
        this.props.addItemToCart(item);
    }

    render() {
        const {categories, products} = this.props;
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid  item xs={12} sm={2}>
                        <Paper style={styles.paper}>
                            <p className="product-title">Categories</p>
                            {categories.map(([group, categories]) => 
                                <Fragment>
                                    <Typography className="headline"
                                        variant="subheading"
                                        >
                                        {group}
                                    </Typography>
                                    <List component="ul">
                                        {categories.map(({subCategory}) => <ListItem button>
                                            <ListItemText primary={subCategory}/>
                                        </ListItem>)}
                                    </List>
                                </Fragment>
                           )}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                    <Paper style={styles.paper}>
                        <p className="product-title">Available Products</p>
                        <div className="product-list">
                            {products.map(item => <Product
                                key={item.productId}
                                product={item}
                                handleAddToCart={this.handleAddToCart}/>)
                            }
                        </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: item => dispatch(addItemToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);