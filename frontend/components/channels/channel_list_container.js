import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { getUsersChannels } from '../../reducers/selectors';
import { fetchChannels } from '../../actions/channel_actions';

const mSP = state => ({
  channels: getUsersChannels(state)
});

const mDP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mSP, mDP)(ChannelList);
