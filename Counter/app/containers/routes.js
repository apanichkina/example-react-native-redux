import React from 'react';
import {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'

import Counter from '../components/counter.js'
import Home from '../components/Home.js'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as reducers from '../reducers';
import * as actions from '../actions/counterActions.js';
import AppNavigator from '../containers/AppNavigator';

class Right extends React.Component {
    render(){
        return <Text style={{
        width: 80,
        height: 37,
        position: "absolute",
        bottom: 4,
        right: 2,
        padding: 8
    }}>Right</Text>
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
        alignItems: "center"}

});

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};


class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        console.log("Props", this.props, state, actions); // everything ok here

        return <AppNavigator/>
    }
}


export default connect(state => ({
        state: state.counter
    }),
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Routes);