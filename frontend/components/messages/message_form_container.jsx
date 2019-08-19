import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './message_form';
import { fetchMessages } from '../../actions/message_actions';
import { createACSubscription } from '../../actions/channel_actions';

const mSP = (state, ownProps) => ({
  currentUserId: state.session.id,
  currentChannelId: ownProps.match.params.channelId
});

const mDP = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  createACSubscription: (channelId, receiveMessage) => dispatch(createACSubscription(channelId, receiveMessage))
});

export default withRouter(connect(mSP, mDP)(MessageForm));