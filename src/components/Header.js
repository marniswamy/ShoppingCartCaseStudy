import React from 'react';
import {withStyles} from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
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
import DrawerComponent from './Drawer'

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
    },
    appBar: {
        padding: 0
    }
};

const HeaderComponent = ({count, classes, showMenu, handleSelectMenu, categories}) => (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar className="app-bar">
                <Hidden only={['md', 'lg', 'xl']}>
                    {showMenu && <DrawerComponent categories={categories} handleSelectMenu={handleSelectMenu}/>
}
                </Hidden>
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
