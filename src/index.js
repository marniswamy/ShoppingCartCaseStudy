import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import Store from './store';
import Routes from './routes';
import {browserHistory} from 'react-router';

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
    <Routes history={browserHistory}/>
</Provider>, document.getElementById('root'));
