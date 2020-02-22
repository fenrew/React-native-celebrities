import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";


import Home from "./components/Home"
import Celebrities from "./components/Celebrities"
import Celebrity from "./components/Celebrity"

const RootStack = createStackNavigator(
  {
    Home: Home,
    Celebrities: Celebrities,
    Celebrity: Celebrity
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render() {
    return (
      <AppContainer>

      </AppContainer>
    );
  }
}