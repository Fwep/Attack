export const getUsersChannels = ({ entities: { channels } }) => (
  Object.values(channels).sort((ch1, ch2) => {
    const nameA = ch1.name;
    const nameB = ch2.name;
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
  })
);

export const getChannelMessages = ({ entities: { messages } }) => (
  Object.values(messages).length ? Object.values(messages) : []
);

export const getChannelName = ({entities: { channels }}, channelId) => (
  (channelId in channels) ? channels[channelId]['name'] : ""
);
