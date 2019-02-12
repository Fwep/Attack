import * as MessageAPIUtil from "../util/messages_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES, 
  messages
});

export const fetchMessages = channelId => dispatch => {
  return MessageAPIUtil.fetchMessages(channelId)
    .then(messages => dispatch(receiveMessages(messages)))
};

window.fetchMessages = fetchMessages;
