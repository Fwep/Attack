import { connect } from 'react-redux';
import SplashForm from './splash_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
  };
};


export default withRouter(connect(mapStateToProps, null)(SplashForm));
