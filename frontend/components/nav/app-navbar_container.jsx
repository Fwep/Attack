import { connect } from 'react-redux';
import AppNavBar from './app-navbar';
import { withRouter } from 'react-router-dom';

const mSP = ({ entities: { channels } }, ownProps) => {
  let channelId = ownProps.match.params.channelId;
  return {
    channel: channels[channelId] || Object.values(channels)[0]
  }
}

export default withRouter(connect(mSP, null)(AppNavBar));