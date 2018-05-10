import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {InsertPhoto} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const ListViewComponent = ({product, cartProducts, handleDeleteFromCart}) => {
const selectedProduct = cartProducts.filter(item => item.productId == product.productId)[0];
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
                    secondary={`${selectedProduct.category} - ${selectedProduct.subCategory}`}/>
                 <span className="product-amount"> {product.item.length}&nbsp;X &nbsp; 
                <CurrencyFormatter amount={selectedProduct.price}/>
                </span>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => handleDeleteFromCart(selectedProduct.productId)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    </div>
);
}

export default ListViewComponent;