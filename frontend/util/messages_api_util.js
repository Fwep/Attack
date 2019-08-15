export const fetchMessages = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/messages`
  })
};
