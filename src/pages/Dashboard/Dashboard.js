import React, {Component} from 'react';
import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header'
import Cart from '../../components/Cart';
import {selectAvailableProducts} from '../../selectors/selectors';

class Dashboard extends Component {
    render() {
        console.log('productList', this.props.availableProducts);
        return (
            <div>
                <HeaderComponent/>
                <Cart/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      availableProducts: selectAvailableProducts(state)
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);