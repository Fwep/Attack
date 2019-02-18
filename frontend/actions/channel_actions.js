import * as ChannelAPIUtil from '../util/channels_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
);

export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "ChannelChannel", id: channelId},
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