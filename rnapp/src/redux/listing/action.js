// Actions
export const AVAILABLE_LISTINGS = 'ListingsState/AVAILABLE';
export const ADD_LISTING = 'ListingsState/ADD';
export const UPDATE_LISTING = 'AddState/UPDATE';
export const DELETE_LISTING = 'ListingsState/DELETE';
export const IS_FETCHING = 'ListingState/IS_FETCHING';
export const GET_LISTING_SUCCESS = 'ListingState/GET_LISTING_SUCCESS';
export const GET_LISTING_FAIL = 'ListingState/GET_LISTING_FAIL';

import {AsyncStorage} from 'react-native';
import ListingsStateReducer from '.';

// Action creators
// Add Listing - CREATE (C)
export const addListing = () => ({
  type: ADD_LISTING,
});

// Get Listings - READ (R)
export const getListings = () => {
  return dispatch => {
    console.log(`Bearer ${token}`);

    dispatch({type: IS_FETCHING});
    let listings = [];
    return dispatch({
      type: AVAILABLE_LISTINGS,
      payload: listings,
    });
  };
};

// Update Listing - UPDATE (U)
export const updateListing = () => ({
  type: UPDATE_LISTING,
  payload: listings,
});

// Delete Listing - DELETE (D)
export const deleteListing = id => ({
  type: DELETE_LISTING,
  payload: listings,
});

/*
export const QUOTES_AVAILABLE = 'QUOTES_AVAILABLE';
export const ADD_QUOTE = 'ADD_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';

// Add Quote - CREATE (C)
export function addQuote(quote) {
  return dispatch => {
    AsyncStorage.getItem('data', (err, quotes) => {
      if (quotes !== null) {
        quotes = JSON.parse(quotes);
        quotes.unshift(quote); //add the new quote to the top
        AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
          dispatch({type: ADD_QUOTE, quote: quote});
        });
      }
    });
  };
}

// Get Data - READ (R)
export function getQuotes() {
  return dispatch => {
    AsyncStorage.getItem('data', (err, quotes) => {
      if (quotes !== null) {
        dispatch({type: QUOTES_AVAILABLE, quotes: JSON.parse(quotes)});
      }
    });
  };
}

// Update Quote - UPDATE (U)
export function updateQuote(quote) {
  return dispatch => {
    AsyncStorage.getItem('data', (err, quotes) => {
      if (quotes !== null) {
        quotes = JSON.parse(quotes);
        var index = getIndex(quotes, quote.id); //find the index of the quote with the id passed
        if (index !== -1) {
          quotes[index]['author'] = quote.author;
          quotes[index]['quote'] = quote.quote;
        }
        AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
          dispatch({type: UPDATE_QUOTE, quote: quote});
        });
      }
    });
  };
}

// Delete Quote - DELETE (D)
export function deleteQuote(id) {
  return dispatch => {
    AsyncStorage.getItem('data', (err, quotes) => {
      if (quotes !== null) {
        quotes = JSON.parse(quotes);

        var index = getIndex(quotes, id); //find the index of the quote with the id passed
        if (index !== -1) quotes.splice(index, 1); //if yes, undo, remove the QUOTE
        AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
          dispatch({type: DELETE_QUOTE, id: id});
        });
      }
    });
  };
}

function getIndex(data, id) {
  let clone = JSON.parse(JSON.stringify(data));
  return clone.findIndex(obj => parseInt(obj.id) === parseInt(id));
}
*/
