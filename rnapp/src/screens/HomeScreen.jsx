import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Alert, Button, Layout, Text } from 'react-native-ui-kitten';
import Auth0 from 'react-native-auth0';

let credentials = require('./auth0-credentials');
const auth0 = new Auth0(credentials);

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + credentials.domain + '/userinfo'
      })
      .then(credentials => {
        Alert.alert(
          'Success',
          'AccessToken: ' + credentials.accessToken,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed')
            }
          ],
          { cancelable: false }
        );
        this.setState({ accessToken: credentials.accessToken });
      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then(success => {
        Alert.alert('Logged out!');
        this.setState({ accessToken: null });
      })
      .catch(error => {
        console.log('Log out cancelled');
      });
  };

  render() {
    let loggedIn = this.state.accessToken === null ? false : true;
    return (
      <Layout style={styles.container}>
        <Text style={styles.text} category="h4">
          Welcome to UI Kitten
        </Text>
        <Button>BUTTON</Button>
        <Text style={styles.header}> Auth0Sample - Login </Text>
        <Text>You are {loggedIn ? '' : 'not '} logged in . </Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
    marginVertical: 16
  }
});
