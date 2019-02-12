import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../../actions/message_actions"
import merge from "lodash/merge";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_MESSAGE:
      newState[message.id] = message;
      return merge({}, state, newState);
    case RECEIVE_MESSAGES:
      action.messages.forEach(message => {
        newState[message.id] = message;
      });
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;