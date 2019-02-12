import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './message_form';

const mSP = (state, ownProps) => ({
  currentUserId: state.session.id,
  currentChannelId: ownProps.match.params.channelId
});

const mDP = dispatch => ({

});

export default withRouter(connect(mSP, mDP)(MessageForm));