import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageList from './message_list';
import { fetchMessages } from '../../actions/message_actions';
import { getChannelMessages, getChannelName } from '../../reducers/selectors';

const mSP = (state, ownProps) => ({
  messages: getChannelMessages(state),
  channelName: getChannelName(state, ownProps.match.params.channelId)
});

const mDP = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
});

export default withRouter(connect(mSP, mDP)(MessageList));