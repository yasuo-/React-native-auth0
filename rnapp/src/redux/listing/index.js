import {AsyncStorage} from 'react-native';
import {
  AVAILABLE_LISTINGS,
  ADD_LISTING,
  UPDATE_LISTING,
  DELETE_LISTING,
  IS_FETCHING,
  GET_LISTING_SUCCESS,
  GET_LISTING_FAIL,
} from './action';

// Initial state
const initialState = {
  isFetching: false,
  results: {},
  hasError: false,
  errorMessage: null,
};

// Reducer
export default function ListingsStateReducer(
  state = initialState,
  action = {},
) {
  switch (action.type) {
    case IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
        results: null,
        hasError: false,
        errorMessage: null,
      });
    case GET_LISTING_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        results: {}, //action.payload,
        hasError: false,
        errorMessage: null,
      });
    case GET_LISTING_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        status: {}, //action.payload.status,
        results: {}, //action.payload,
        hasError: true,
        errorMessage: {}, //action.payload,
      });
    case AVAILABLE_LISTINGS:
      return state;
    case ADD_LISTING:
      return state;
    case UPDATE_LISTING:
      return state;
    case DELETE_LISTING:
      return state;
    default:
      return state;
  }
}
/*
// Actions
export const AVAILABLE_LISTINGS = 'ListingsState/AVAILABLE';
export const ADD_LISTING = 'ListingsState/ADD';
export const UPDATE_LISTING = 'AddState/UPDATE';
export const DELETE_LISTING = 'ListingsState/DELETE';

import {AsyncStorage} from 'react-native';
import {createActions, handleActions} from 'redux-actions';

// Action creators
// Add Listing - CREATE (C)
export const addListing = () => ({
  type: ADD_LISTING,
});

// Get Listings - READ (R)
export const getListings = () => {
  let listings = [];
  return {
    type: AVAILABLE_LISTINGS,
    payload: listings,
  };
};

// Update Listing - UPDATE (U)
export const UpdateListing = () => ({
  type: UPDATE_LISTING,
});

export const Actions = createActions(
  {
    CLICK_TWO: args => args,
  },
  'CLICK_ONE',
);

const Reducer = handleActions(
  {
    [Actions.clickOne]: (state, action) => ({
      ...state,
    }),
    [Actions.clickTwo]: (state, action) => ({
      ...state,
      text: action.payload,
    }),
  },
  initialState,
);
*/
