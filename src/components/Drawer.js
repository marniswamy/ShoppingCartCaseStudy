import React, {Fragment} from 'react';
import {random} from 'lodash';
import {Paper, ListItem, List, ListItemText} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import {IconButton, Drawer} from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import {formatDataBySubCategory} from '../utils/utils';

const styles = {
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
};

class DrawerComponent extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({[side]: open});
    };

    render() {
        const {handleSelectMenu, categories} = this.props;
        return (
            <div>
                <IconButton
                    color="inherit"
                    aria-label="Menu"
                    onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}>
                        <Paper>
                            <h3 className="product-title">Categories</h3>
                            <List component="ul">
                                <ListItem button onClick={() => handleSelectMenu()}>
                                    <ListItemText primary={'All'}/>
                                </ListItem>
                            </List>
                            {categories.map(([group, categories]) => <Fragment key={group}>
                                <ListItem button className="list-head" onClick={() => handleSelectMenu(group)}>
                                    <ListItemText primary={group}/>
                                </ListItem>
                                <List component="ul">
                                    {formatDataBySubCategory(categories).map(item => <ListItem
                                        key={random(0, 500)}
                                        onClick={() => handleSelectMenu(group, item.subCategory)}
                                        button>
                                        <ListItemText primary={item.subCategory}/>
                                    </ListItem>)}
                                </List>
                            </Fragment>)}
                        </Paper>
                    </div>
                </Drawer>

            </div>
        );
    }
}

export default withStyles(styles)(DrawerComponent);
