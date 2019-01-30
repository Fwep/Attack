import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';

const mapStateToProps = ({entities: {users, channels, messages}, session}, ownProps) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
