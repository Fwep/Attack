import React from 'react';
import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import userChannels from '../../reducers/selectors';
import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: userChannels(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
