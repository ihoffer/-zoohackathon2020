import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './app/App';
import StaticApp from './app/StaticApp';

const rootElement = document.getElementById('app');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement,
);

ReactDOM.render(
    <StaticApp />,
    document.getElementById('staticApp'),
);
