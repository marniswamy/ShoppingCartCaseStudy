import React, {Component} from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: ['Item1', 'Item2', 'Item3']
        }
    }

    onClickAdd = (item) => {
        this
            .props
            .addItem(item);
    }
    render() {
        return (
            <div>
                <h3>Items List</h3>
                <ul>
                    {this
                        .state
                        .products
                        .map((item, index) => {
                            return <li key={index}>
                                <button onClick={() => this.onClickAdd(item)}>[+]</button>
                                {item}
                            </li>
                        })
}
                </ul>
            </div>
        )
    }
}

export default ProductList;