import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS
} from '../../actions/channel_actions';
import merge from 'lodash/merge';

const = _nullChannel = {
  1: {
    id: 1,
    creator_id: 1,
    title: 'nullChannel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    private: false,
    is_direct: false,
  }
}

const channelsReducer = (state = _nullChannel, action) => {
  Object.freeze(state);
    let newState = {};
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, {[action.channel.id]: action.channel})
    case RECEIVE_CHANNELS:
      action.channels.forEach(channel => {
        newState[channel.id] = channel
      })
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;
