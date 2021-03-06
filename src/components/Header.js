import React from 'react';
import {withStyles} from 'material-ui/styles';
import {
    Badge,
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton
} from 'material-ui';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

const HeaderComponent = ({count, classes, showMenu}) => (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    Shopping Cart
                </Typography>
                {showMenu && <div>
                    <IconButton color="inherit">
                        <Badge badgeContent={count} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    <Button color="inherit" className="checkout-button">
                        <Link to="/checkout">Checkout</Link>
                    </Button>
                </div>
                }
                {!showMenu && <Button color="inherit" className="checkout-button">
                    <Link to="/dashboard">Dashboard</Link>
                </Button>
                }
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(styles)(HeaderComponent);
