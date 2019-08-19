class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel_#{params[:id]}"
  end

  def speak(data)
    incoming_message = (data["message"])
    created_message = Message.create(incoming_message)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
