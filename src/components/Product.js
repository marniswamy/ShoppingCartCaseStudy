import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CurrencyFormatter from './CurrencyFormatter';

const styles = {
    card: {
        minWidth: 200,
        margin: 8
    },
    title: {
        marginBottom: 16,
        fontSize: 14
    }
};

const ProductComponent = (props) => {
    const {classes} = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Leather Driver Saddle Loafers, Tan
                    </Typography>
                    <Typography component="p">
                        Available stock : 12
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography component="p">
                        Price :
                        <CurrencyFormatter amount={34}/>
                    </Typography>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    );
}

ProductComponent.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(ProductComponent);