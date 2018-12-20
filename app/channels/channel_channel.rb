class ChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_for "channel_channel"
  end

  def speak(data)
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChannelChannel.broadcast_to('channel_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
