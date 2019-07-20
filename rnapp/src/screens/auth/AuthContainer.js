import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {compose} from 'recompose';

import * as AuthStateActions from '../../redux/auth';
import AuthScreen from './AuthScreen';

export default compose(
  connect(
    // mapStateToProps
    state => ({}),
    // mapDispatchToProps
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
      doLogin: provider => dispatch(AuthStateActions.loggedIn(provider)),
    }),
  ),
)(AuthScreen);
