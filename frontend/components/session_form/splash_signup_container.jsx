import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SplashForm from './splash_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
