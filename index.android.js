/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Container from './app/container/index';

export default class dating_ai extends Component {
  render() {
    return (
        <Container />
    );
  }
}
AppRegistry.registerComponent('dating_ai', () => dating_ai);
