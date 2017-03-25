
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

import * as reducers from '../reducers';
import Components from '../components/index';

const reducer = combineReducers(reducers);
//const store = createStore(reducer, applyMiddleware(thunk));

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Components/ >
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

