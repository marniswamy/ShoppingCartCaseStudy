import React, {Component} from 'react';
import {connect} from 'react-redux'
import Grid from 'material-ui/Grid';
import Product from './Product';
import { addItemToCart } from '../actions/addToCart';

class ProductList extends Component {

    handleAddToCart = (item) => {
        this.props.addItemToCart(item);
    }

    render() {
        const { categories, products } = this.props;
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={2}>
                        <p className="product-title">Categories</p>
                       {
                        categories.map(item => {
                            return <div>
                             <h4 key={item.category}>{item.category}</h4>
                             {
                                item.item.map(prod => {
                                    return <p key={prod.productId}>{prod.subCategory}</p>
                                })
                             }
                             </div>
                        })
                       }
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <p className="product-title">Available Products</p>
                        <div className="product-list">
                        {
                            products.map(item => 
                                <Product 
                                key={item.productId} 
                                product={item}
                                handleAddToCart={this.handleAddToCart}
                                />)
                        }
                           
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: item => dispatch(addItemToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);