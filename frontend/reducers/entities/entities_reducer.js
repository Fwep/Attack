import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import subscriptionsReducer from './subscriptions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  subscriptions: subscriptionsReducer
});

export default entitiesReducer;
