const userChannels = state => {
  const subs = Object.values(state.entities.subscriptions);
  const channels = Object.values(state.entities.channels);

  let subsArr = [];
  let channelsArr = [];

  // subs.forEach(sub => {
  //   if (state.session.id === sub.userId) {
  //     subsArr.push(sub);
  //   }
  // });

  // subsArr = subs.filter(sub => {
  //   for (let i = 0; i < subs.length; i++) {
  //     if (sub.userId === state.session.id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // })
  //
  // // channelsArr = channels.filter(channel => {
  // //   for (let i = 0; i < subsArr.length; i++) {
  // //     if (channel.id === subsArr[i].channelId) {
  // //       return true;
  // //     }
  // //   }
  // //   return false;
  // // })
  // channels.forEach(channel => {
  //   subsArr.forEach(sub => {
  //     if (channel.id === sub.channelId) {
  //       channelsArr.push(channel)
  //     }
  //   })
  // })

  return subs;
};

export default userChannels;
