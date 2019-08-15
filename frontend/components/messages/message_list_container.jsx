import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageList from './message_list';
import { fetchMessages } from '../../actions/message_actions';
import { getChannelMessages } from '../../reducers/selectors';

const mSP = state => ({
  messages: getChannelMessages(state)
});

const mDP = dispatch => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
});

export default withRouter(connect(mSP, mDP)(MessageList));