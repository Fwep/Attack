class Api::ChannelsController < ApplicationController
  def show
    @channel = Channel.find_by(params[:id])
    render "api/channels/show" if @channel
  end

  def index
    @channels = Channel.all
    render "api/views/index"
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render "api/channels/show"
    else
      render @channel.errors.full_messages
    end
  end

  def update
    @channel = Channel.new(channel_params)
    if @channel.save
      render "api/channels/show"
    else
      render @channel.errors.full_messages
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:creator_id, :name, :description, :private, :is_direct)
  end
end
