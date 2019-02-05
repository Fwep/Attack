# We made this (I named it perfectly, calling it 'Channel')

class ChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_for "channel_channel"
  end

  def speak(data)
    message = Message.create(body: data['message'])

    # This is an object. Broadcasting a string will throw an error
    socket = { message: message.body } 
    
    ChannelChannel.broadcast_to('channel_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
