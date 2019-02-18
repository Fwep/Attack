class ChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_channel"
    p "Subscribed!"
  end

  def speak(data)
    incoming_message = (data["message"])
    created_message = Message.create(incoming_message)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
