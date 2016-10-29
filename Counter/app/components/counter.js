import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/counterActions.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});

class Counter extends React.Component {

  constructor(props) {
    super(props);
    console.log('LAUNCH', props);
  }


  render(){
    const { state, actions } = this.props;

    const { increment, decrement } = actions;

    console.log("Actions", actions);
    console.log("Props: ", this.props, state, increment, decrement);
    console.log("Increment: ", increment);

    return (
        <View  style={styles.container}>
          <Text>Login page: {this.props.data}</Text>
          <Text>{state.count}</Text>

          <Button onPress={increment}>Increment</Button>

          <Button onPress={Actions.pop}>Back</Button>

        </View>
    );
  }
}


export default connect(state => ({
      state: state.counter
    }),
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch)
    })
)(Counter);