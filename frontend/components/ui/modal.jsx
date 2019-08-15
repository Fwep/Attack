import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ChannelFormContainer from '../channels/channel_form_container';

const Modal = ({modal, closeModal}) => {
if (!modal) return null;

  let component;
  switch(modal) {
    case 'createChannel':
      component = <ChannelFormContainer closeModal={closeModal}/>;
      break;
    default:
      return null;
  }

  document.addEventListener('keydown', e => {
    if (e.key == "Escape") {
      let X = document.getElementById('X-button');
      if (!!X) X.click();
    }
  })

  return (
    <div className="modal-background">
      <button 
        id="X-button"
        className="modal-close"
        onClick={closeModal}
      >
        <div>X</div>
        <span>
          esc
        </span>
      </button>
        {component}
    </div>
  )
}

const mSP = state => ({
  modal: state.ui.modal
});

const mDP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSP, mDP)(Modal);