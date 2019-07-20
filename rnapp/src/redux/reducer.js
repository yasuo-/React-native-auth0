// @flow
import {combineReducers} from 'redux';
import NavigationStateReducer from './navigation';
import AuthStateReducer from './auth';
import ListingsStateReducer from './listing';

export default combineReducers({
  navigation: NavigationStateReducer,
  auth: AuthStateReducer,
  listing: ListingsStateReducer,
});
