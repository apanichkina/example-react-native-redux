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
import { addStory, buyStory, setVisibilityFilter } from '../actions/store'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
// Выведем в консоль начальное состояние
console.log(store.getState())

// Каждый раз при обновлении состояния - выводим его
// Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
)

// Отправим несколько действий
store.dispatch(addStory('0Learn about actions',999))
store.dispatch(addStory('1Learn about reducers',10))
store.dispatch(addStory('2Learn about store',33))


// Прекратим слушать обновление состояния
//unsubscribe()
export default class App extends React.Component  {

  render() {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
  }
}


