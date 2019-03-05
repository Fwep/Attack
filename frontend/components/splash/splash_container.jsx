import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchChannels } from '../../actions/channel_actions';
import SplashBody from './splash_body';

const mapStateToProps = ({ session, entities: {users, channels} }) => {
  return {
    currentUser: users[session.id],
    channels: channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashBody));
