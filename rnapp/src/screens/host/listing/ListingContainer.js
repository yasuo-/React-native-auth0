import {connect} from './node_modules/react-redux';
import {compose} from 'recompose';

import ListingScreen from './ListingScreen';

export default compose(
  connect(
    state => ({
      listings: state.listing.listings,
    }),
    dispatch => ({}),
  ),
)(ListingScreen);
