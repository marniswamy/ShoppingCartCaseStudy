import React from 'react';
import Typography from 'material-ui/Typography';
import CurrencyFormatter from './CurrencyFormatter';
import List, {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {InsertPhoto} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

const ListViewComponent = ({product}) => {
    console.log('product', product);
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <InsertPhoto/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={product.name} 
                    secondary={ `${product.category} - ${product.subCategory}`}
                    />
                    <CurrencyFormatter amount={product.price}/>
                    &nbsp;&nbsp;
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
}

export default ListViewComponent;