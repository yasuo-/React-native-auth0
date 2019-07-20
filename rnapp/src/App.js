import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, ActivityIndicator} from 'react-native';
import {mapping, light as lightTheme} from '@eva-design/eva';
import Theme from './constants/Theme';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './screens/navigation/NavigationContainer';
import {store, persistor} from './redux/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {accessToken: null, isLoadingComplete: false};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color={'#ffcccc'} />
            </View>
          }
          persistor={persistor}>
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <StatusBar barStyle="light-content" backgroundColor={'#000000'} />
            <RootNavigation />
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
