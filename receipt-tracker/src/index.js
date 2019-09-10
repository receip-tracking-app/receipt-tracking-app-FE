import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './styling/index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

//create store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Router>
    <Provider store = {store}>
        <App/>
    </Provider>
</Router>, 
document.getElementById('root'));


