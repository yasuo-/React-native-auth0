import React from 'react';

import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import HomeScreen from '../screens/home/HomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';

export const Welcome = {
  screen: WelcomeScreen,
  navigationOptions: ({navigation}) => {
    return {
      title: 'Welcome',
    };
  },
};
export const Home = {
  screen: HomeScreen,
  navigationOptions: ({navigation}) => {
    return {
      title: 'ホーム',
    };
  },
};

export const Auth = {
  screen: AuthScreen,
  navigationOptions: ({navigation}) => {
    return {
      title: 'auth',
    };
  },
};
