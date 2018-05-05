import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={StoreInstance}>
        <App/>
    </Provider>
</MuiThemeProvider>, document.getElementById('root'));
