import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import AppNavigator from '../containers/AppNavigator';
import { connect, Provider } from 'react-redux';
import * as reducers from '../reducers';
import { addStory, buyStory } from '../actions/store'
import { fetchStories } from '../actions/storyFromServer'
import { fetchCategories } from '../actions/storyCategory'
import { receiveCategories } from '../actions/storyCategory'
import { receiveStories } from '../actions/storyFromServer'
import { PossiblePurposes } from '../actions/actionTypes'
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk,loggerMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
// Выведем в консоль начальное состояние
console.log(store.getState())

// Каждый раз при обновлении состояния - выводим его
// Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
//let unsubscribe = store.subscribe(() =>
//        console.log(store.getState())
//)

// Отправим несколько действий
//store.dispatch(addStory('0Learn about actions',999, 1))
//store.dispatch(addStory('1Learn about reducers',10, 1))
//store.dispatch(addStory('2Learn about store',33,2))
//store.dispatch(addCategory('Category1',1))
//store.dispatch(addCategory('Category2',2))
//store.dispatch(addStory('2Learn about store',333,3))
//store.dispatch(addStory('Ann and her magic',13,5))
store.dispatch(fetchCategories()).then(() =>
        console.log(store.getState())
)
store.dispatch(fetchStories(PossiblePurposes.SHOP)).then(() =>
        console.log(store.getState())
)
store.dispatch(fetchStories(PossiblePurposes.USER)).then(() =>
        console.log(store.getState())
)
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


