import * as ChannelAPIUtil from '../util/channels_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_ALL_CHANNELS";

export const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

export const receiveChannels = payload => {
  return {
    type: RECEIVE_CHANNELS,
    channels: payload.channels,
    subscriptions: payload.subscriptions,
    users: payload.users,
  }
}

export const createChannel = channel => dispatch => {
  return ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
};

export const fetchChannel = id => dispatch => {
  return ChannelAPIUtil.fetchChannel(id)
    .then(channel => dispatch(receiveChannel(channel)))
};

export const fetchChannels = () => dispatch => {
  return ChannelAPIUtil.fetchChannels()
    .then(payload => dispatch(receiveChannels(payload)))
};

export const updateChannel = (channel) => dispatch => {
  return ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
};
