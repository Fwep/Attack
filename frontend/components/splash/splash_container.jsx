import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchChannels } from '../../actions/channel_actions';
import Splash from './splash';

const mSP = ({ session, entities: {users, channels} }) => {
  return {
    currentUser: users[session.id],
    channels: channels
  };
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default withRouter(connect(mSP, mDP)(Splash));
