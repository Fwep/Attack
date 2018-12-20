import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS
} from '../../actions/channel_actions';
import merge from 'lodash/merge';


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
    let newState = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel})
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels);
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;
