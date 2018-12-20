import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS
} from '../../actions/channel_actions';
import merge from 'lodash/merge';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge()
    default:
      return state;
  }
}

export default channelsReducer;
