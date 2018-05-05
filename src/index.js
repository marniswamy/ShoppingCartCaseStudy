import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import Store from './store';
import Routes from './routes';
import {browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const StoreInstance = Store();

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={StoreInstance}>
        <Routes history={browserHistory}/>
    </Provider>
</MuiThemeProvider>, document.getElementById('root'));
