import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SplashBody from './splash_body';

const mapStateToProps = ({ session, entities: {users} }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashBody);
