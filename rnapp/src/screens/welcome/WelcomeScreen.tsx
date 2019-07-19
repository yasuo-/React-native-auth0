import * as React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import Auth0 from 'react-native-auth0';

let trans: any = require('../../translations/');
let credentials: any = require('../../credentials/auth0-credentials');
const auth0 = new Auth0(credentials);

export default class WelcomeScreen extends React.Component {
  state: { accessToken: any; };
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  /**
   * _onLogin
   * Auth0 => GestScreen
   */
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
  }

  /**
   * _onLoginToHost
   * Auth0 => HostScreen
   */
  _onLoginToHost = () => {
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
        <Text style={styles.header}> Welcome to {trans.appName} - Login </Text>
        <Text>You are {loggedIn ? '' : 'not '} logged in . </Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        >ゲスト</Button>
        <Text>or</Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLoginToHost}
          title={loggedIn ? 'Log Out' : 'Log In'}
        >ホスト</Button>
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
