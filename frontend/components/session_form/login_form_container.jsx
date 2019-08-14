import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { fetchChannels } from '../../actions/channel_actions';
import LoginForm from './login_form';


const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    channels: state.entities.channels
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clear: () => dispatch(clearErrors()),
    fetchChannels: () => dispatch(fetchChannels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
