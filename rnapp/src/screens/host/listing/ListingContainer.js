import {connect} from './node_modules/react-redux';
import {compose} from 'recompose';

import ListingScreen from './ListingScreen';

export default compose(
  connect(
    state => ({
      listing: state.listing.listing,
    }),
    dispatch => ({
      doPublish: listing_id => dispatch(AuthStateActions.doPublish(listing_id)),
      doPrivate: listing_id => dispatch(AuthStateActions.doPrivate(listing_id)),
    }),
  ),
)(ListingScreen);
