import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(signup(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
