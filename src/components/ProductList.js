import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Product from './Product';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: ['Item1', 'Item2', 'Item3']
        }
    }

    getCaterogies = () => {
        return Object.getOwnPropertyNames(this.props.products);
    }

    render() {
        console.log('products', this.props.products);
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={2}>
                        <p className="product-title">Categories</p>
                        {this
                            .getCaterogies()
                            .map((title, key) => {
                                return <div key={key}>
                                    <h4>{title}</h4>
                                </div>
                            })
                        }
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <p className="product-title">Available Products</p>
                        <div className="product-list">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProductList;