import { connect } from 'react-redux';
import ChannelList from './channel_list';

const mSP = state => ({
  channels: state.entities.channels
});

const mDP = dispatch => ({
});

export default connect(mSP, mDP)(ChannelList);
