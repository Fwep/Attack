import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mDP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSP, mDP)(NavBar)
