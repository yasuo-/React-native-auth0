import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {
  BottomTabNavigatorToHost,
  BottomTabNavigatorToGest,
} from './MainTabNavigator';

// To use this screens please see the full version at https://reactnativestarter.com
import {Welcome} from './Stacks';

const rootStack = createStackNavigator(
  {
    Welcome,
    LoggedInToHost: BottomTabNavigatorToHost,
    LoggedInToGest: BottomTabNavigatorToGest,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(rootStack);
