export const fetchChannels = () => (
  $.ajax({
    method: 'GET',
    url: '/api/channels'
  })
);

export const fetchChannel = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  })
);

export const createChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: `/api/channels`,
    data: channel,
    processData: false,
    contentType: false
  })
);

export const updateChannel = (channel) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: {channel},
  })
);