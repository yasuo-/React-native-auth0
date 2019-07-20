import React from 'react';
import {addNavigationHelpers} from 'react-navigation';

import AuthScreen from '../screens/auth/AuthScreen';
import AppNavigator from './RootNavigation';

export default function NavigatorView({dispatch, navigatorState, authState}) {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  return <AppNavigator />;
  //}
  //return <AuthScreen />;
}
