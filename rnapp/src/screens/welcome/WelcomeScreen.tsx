import * as React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import Auth0 from 'react-native-auth0';

let trans: any = require('../../translations/');
let credentials: any = require('../../credentials/auth0-credentials');
const auth0: Auth0 = new Auth0(credentials);

interface Props {}
interface State {
  accessToken: any,
}
export default class WelcomeScreen extends React.Component<Props, State> {
  state: { accessToken: any; };
  constructor(props) {
    super(props);
    this.state = { accessToken: null };
  }

  /**
   * _onLogin
   * Auth0 => GestScreen
   */
  _onLogin = (): void => {
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
  _onLoginToHost = (): void => {
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

  /**
   * _onLogout
   * Auth0 logout
   */
  _onLogout = (): void => {
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
    let loggedIn: boolean = this.state.accessToken === null ? false : true;
    return (
      <Layout style={styles.container}>
        <Text style={styles.text} category='h4'> Welcome to {trans.appName} - Login </Text>
        <Text>You are {loggedIn ? '' : 'not '} logged in . </Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        >ゲストLogin</Button>
        <Button
          onPress={() => this.props.navigation.navigate('LoggedInToGest')}
          title={'gest'}
        >ゲストページ</Button>
        
        <Text>or</Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLoginToHost}
          title={loggedIn ? 'Log Out' : 'Log In'}
        >ホストLogin</Button>
         <Button
          onPress={() => this.props.navigation.navigate('LoggedInToHost')}
          title={'host'}
        >ホストページ</Button>
      </Layout>
    );
  }
}

const styles: any = StyleSheet.create({
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
