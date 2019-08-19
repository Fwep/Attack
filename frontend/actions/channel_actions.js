import * as ChannelAPIUtil from '../util/channels_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
);

export const fetchChannel = (id) => dispatch => (
  ChannelAPIUtil.fetchChannel(id)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = (channel) => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (channel) => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createACSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "ChatChannel", id: channelId},
    {
      received: function(data) {
        const message = JSON.parse(data.message)
        dispatch(receiveMessage(message));
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
    });
};