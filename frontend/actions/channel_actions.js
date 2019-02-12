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

function updateScroll() {
  var element = document.getElementById("channel-messages");
  element.scrollTop = element.scrollTop + 50;
}

export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    { channel: "ChannelChannel", id: channelId },
    {
      received: function (data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
        updateScroll();
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
    });
};