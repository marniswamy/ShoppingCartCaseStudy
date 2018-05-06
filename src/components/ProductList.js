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

    render() {
        console.log('getCaterogies', this.props);
        const { categories, products } = this.props;
        return (
            <div className="product-container">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={2}>
                        <p className="product-title">Categories</p>
                       {
                        categories.map((item, key) => {
                            return <div>
                             <h4 key={key}>{item.category}</h4>
                             {
                                item.item.map((prod, key) => {
                                    return <p key={key}>{prod.subCategory}</p>
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
                            products.map((item, key) =>{
                                return  <Product key={key} product={item} />
                            })
                        }
                           
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ProductList;