// @flow
import {combineReducers} from 'redux';
import NavigationStateReducer from './navigation';
import AuthReducer from './auth';

export default combineReducers({
  navigation: NavigationStateReducer,
  auth: AuthReducer,
});
