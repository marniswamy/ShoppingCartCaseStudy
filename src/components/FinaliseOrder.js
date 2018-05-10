import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class FinaliseOrder extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handlePlaceAndClose = () => {
    this.setState({ open: false });
    window.location.href = "./";
  };

  render() {
    const { fullScreen, amount } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen} disabled={!amount} variant="raised" color="primary">Place Order</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Are you sure to proceed to place Order?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              By confirming this, you order will place and will navigate to welcome page. Thanks for shopping!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="raised" color="secondary" autoFocus>
              Cancel
            </Button>
            <Button onClick={this.handlePlaceAndClose} variant="raised" color="primary">
               Place order
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FinaliseOrder;
