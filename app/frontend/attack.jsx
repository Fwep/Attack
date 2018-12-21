import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ChannelAPIUtil from './actions/channel_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };

  const root = document.getElementById("root");
  window.store = store;
  window.fetchChannels = ChannelAPIUtil.fetchChannels;
  ReactDOM.render(<Root store={store}/>, root)
});
