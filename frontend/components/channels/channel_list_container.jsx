import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { getUsersChannels } from '../../reducers/selectors';

const mSP = state => ({
  channels: getUsersChannels(state)
});

const mDP = dispatch => ({
  
});

export default connect(mSP, mDP)(ChannelList);
