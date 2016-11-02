import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from '../containers/AppNavigator';
import { connect, Provider } from 'react-redux';
import * as reducers from '../reducers';
import { addStory, addCategory, buyStory } from '../actions/store'

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
store.dispatch(addStory('0Learn about actions',999, 1))
store.dispatch(addStory('1Learn about reducers',10, 1))
store.dispatch(addStory('2Learn about store',33,2))
store.dispatch(addCategory('Category1',1))
store.dispatch(addCategory('Category2',2))
store.dispatch(addCategory('Category3',3))
store.dispatch(addCategory('Category4',4))
store.dispatch(addCategory('Category5',5))
store.dispatch(addStory('2Learn about store',333,3))
store.dispatch(addStory('Ann and her magic',13,5))

// Прекратим слушать обновление состояния
//unsubscribe()
export default class App extends React.Component  {

  render() {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
  }
}


