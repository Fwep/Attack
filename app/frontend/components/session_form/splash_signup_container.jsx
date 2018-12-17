import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SplashForm from './splash_form';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    class: 'signup',
    formType: 'Sign Up',
    submitText: 'Get Started'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);
