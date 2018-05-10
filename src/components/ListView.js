import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {InsertPhoto} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from 'material-ui/Avatar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {IconButton, Button} from 'material-ui';
import {getRemainingStock} from '../utils/utils';

const ListViewComponent = ({
    product,
    allProducts,
    cartProducts,
    handleDeleteFromCart,
    handleAddToCart,
    handleSingleItemDelete
}) => {
    const selectedProduct = cartProducts.filter(item => item.productId === parseInt(product.productId, 10))[0];
    const availablestock = getRemainingStock(allProducts, cartProducts, selectedProduct);
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <InsertPhoto/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={selectedProduct.name}
                        secondary={`${selectedProduct.category} - ${selectedProduct.subCategory}`}/> {!!availablestock
                        ? <span className="stock-label">{`${availablestock} Items left`}</span>
                        : <span className="stock-label-red">Out of stock</span>
                        }
                    <div className="product-actions">
                        <Button
                            variant="fab"
                            mini
                            color="secondary"
                            onClick={() => handleAddToCart(selectedProduct)}
                            disabled={!availablestock}>
                            <AddIcon/>
                        </Button>
                        <h4>{product.item.length}</h4>
                        <Button
                            variant="fab"
                            mini
                            color="secondary"
                            aria-label="add"
                            onClick={() => handleSingleItemDelete(selectedProduct.productId)}>
                            <RemoveIcon/>
                        </Button>
                    </div>
                    <span className="product-amount">
                        {product.item.length}&nbsp;X &nbsp;
                        <CurrencyFormatter amount={selectedProduct.price}/>
                    </span>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => handleDeleteFromCart(selectedProduct.productId)}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
}

export default ListViewComponent;