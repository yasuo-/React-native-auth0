// Initial state

// Actions
const SKIPPED_LOGIN = 'AuthState/SKIP';
const LOGGED_IN = 'AuthState/LOGGED_IN';
const PASSED_WALKTHROUGH = 'AuthState/PASSED_WALKTHROUGH';
const LOGGED_OUT = 'AuthState/LOGGED_OUT';
const _EMAIL = 'AuthState/LOGGED_EMAIL';
const LOGGED_EMAIL = 'AuthState/LOGGED_EMAIL';

// Action creators
export const loggedIn = provider => {
  return dispatch => {
    let payload;
    async function userData(provider) {
      let fl;
      if (provider === 'facebook') fl = await Fire.shared.fbLogin();
      if (provider === 'google') fl = await Fire.shared.googleLogin();
      const userToken = await Fire.shared.getToken();
      return fl; //JSON.stringify(fl);
    }

    if (provider == 'facebook' || provider === 'google')
      payload = userData(provider);

    dispatch({
      type: LOGGED_IN,
      payload,
    });
  };
};

export const skipLogin = () => ({
  type: SKIPPED_LOGIN,
});

export const passedWalkthrough = () => ({
  type: PASSED_WALKTHROUGH,
});

export const loggedOut = () => ({
  type: LOGGED_OUT,
});

const initialState = {};
// Reducer
export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      console.log('-------------------', action.payload);
      const {auth} = action.payload;
      const user = action.payload.user;

      const token = action.payload.user.ra;
      return Object.assign({}, state, {
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        isLoggedIn: true,
        uid: user.uid,
        id: '', // api server
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        token: token, // jwt
        refreshToken: user.stsTokenManager,
        user: user,
        firebase: auth,
      });
    case SKIPPED_LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: true,
        id: null,
        name: null,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
      });
    case PASSED_WALKTHROUGH:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: false,
        id: null,
        name: null,
        hasPassedWalkthrough: true,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: false,
        loggedOut: true,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        id: null,
        name: null,
      });
    default:
      return state;
  }
}
