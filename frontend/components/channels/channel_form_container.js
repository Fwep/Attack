import { connect } from 'react-redux';
import { createChannel, receiveChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';

const mDP = dispatch => ({
  receiveChannel: (channel) => dispatch(receiveChannel(channel)),
  createChannel: (channel) => dispatch(createChannel(channel))
})

export default connect(null, mDP)(ChannelForm)