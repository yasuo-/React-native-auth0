import React from 'react';

import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import HomeScreen from '../screens/home/HomeScreen';
import AuthScreen from '../screens/auth/AuthScreen';

// host
import HostListingsScreen from '../screens/host/listings/ListingsScreen';
import HostListingScreen from '../screens/host/listing/ListingScreen';

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

export const HostListings = {
  screen: HostListingsScreen,
  navigationOptions: ({navigation}) => {
    return {
      title: 'リスティング',
    };
  },
};

export const HostListing = {
  screen: HostListingScreen,
  navigationOptions: ({navigation}) => {
    return {
      title: 'プレビュー',
    };
  },
};
