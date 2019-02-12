import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatRoom from './chat_room';
import { receiveMessage, fetchMessages } from '../../actions/message_actions';
import { createChannelSubscription } from '../../actions/channel_actions';

const mSP = (state, ownProps) => {
  return {
    channelId: ownProps.match.params.channelId,
    messages: state.entities.messages
  }
};

const mDP = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  createSubscription: (channelId) => dispatch(createChannelSubscription(channelId, receiveMessage)),
  receiveMessage: (message) => dispatch(receiveMessage(message))
});

export default withRouter(connect(mSP, mDP)(ChatRoom));