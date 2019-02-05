import {
  RECEIVE_CHANNELS
} from '../../actions/channel_actions';
import merge from 'lodash/merge';


const subscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.subscriptions);
    default:
      return state;
  }
}

export default subscriptionsReducer;
