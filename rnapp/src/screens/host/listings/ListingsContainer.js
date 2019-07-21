import {connect} from 'react-redux';
import {compose} from 'recompose';

import ListingsScreen from './ListingsScreen';

export default compose(
  connect(
    state => ({
      listings: state.listing.listings,
    }),
    dispatch => ({}),
  ),
)(ListingsScreen);
