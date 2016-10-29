import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Routes from './routes'
import {
    Router,
    Scene,
    Actions,
    } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import * as reducers from '../reducers';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component  {

  render() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
  }
}


