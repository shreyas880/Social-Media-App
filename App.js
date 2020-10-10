import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Insta from './screens/insta';
import FB from './screens/fb';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component {
  render(){
    return (
    <View style={styles.container}>
      <AppContainer style={{
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
      }}/>
    </View>
    );
  }
}

var BottomTabNavigator = createBottomTabNavigator({
  Facebook:{
    screen:FB
  },
  Instagram:{
    screen:Insta
  },
});

var AppContainer = createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});