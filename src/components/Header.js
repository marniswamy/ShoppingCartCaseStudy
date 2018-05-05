import React, {Component} from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Shopping Cart
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default HeaderComponent;
