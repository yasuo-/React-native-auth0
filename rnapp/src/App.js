import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, UIManager} from 'react-native';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';

import WelcomeScreen from './screens/welcome/WelcomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {accessToken: null, isLoadingComplete: false};
  }

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <StatusBar barStyle="light-content" backgroundColor={'#000000'} />
        <WelcomeScreen />
      </ApplicationProvider>
    );
  }
}
