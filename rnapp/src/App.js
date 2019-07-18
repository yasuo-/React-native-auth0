import React, { Component } from 'react';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import RootNavigation from './src/containers/Navigation';

import { HomeScreen } from './screens/HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <HomeScreen />
      </ApplicationProvider>
    );
  }
}
