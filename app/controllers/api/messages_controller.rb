class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    
  end

  private
  def message_params
    params.require(:message).permit(:user_id, :channel_id, :body)
  end
end
