class Api::MessagesController < ApplicationController
  def index
    channel = Channel.find(params[:channel_id])
    @messages = channel.messages 
  end
end
