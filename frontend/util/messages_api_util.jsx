export const fetchMessages = (channelId) => {
  return $.ajax({ // Channel-specific messages, not ALL messages
    method: 'GET',
    url: `/api/channels/${channelId}/messages`
  })
};
