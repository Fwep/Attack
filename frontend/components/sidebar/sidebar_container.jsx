import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { fetchChannels } from '../../actions/channel_actions';

const mSP = state => ({
  currentUser: state.entities.users[state.session.id],
  channels: state.entities.channels
});

const mDP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  logOut: () => dispatch(logout()),
});

export default withRouter(connect(mSP, mDP)(Sidebar));