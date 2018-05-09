import React from 'react';
import CurrencyFormatter from './CurrencyFormatter';
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {InsertPhoto} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const ListViewComponent = ({product, handleDeleteFromCart}) => (
    <div>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <InsertPhoto/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={product.name}
                    secondary={`${product.category} - ${product.subCategory}`}/>
                 <span className="product-amount">   
                <CurrencyFormatter amount={product.price}/>
                </span>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => handleDeleteFromCart(product.productId)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    </div>
);

export default ListViewComponent;