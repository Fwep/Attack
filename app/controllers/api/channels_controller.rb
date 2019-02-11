class Api::ChannelsController < ApplicationController
  def show
    @messages = Message.all
    # @channel = Channel.find(params[:id])
    render "api/channels/show" if @channel
  end

  def index
    @channels = Channel.all
    render :index
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id
    if @channel.save
      render "api/channels/show"
    else
      render @channel.errors.full_messages
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render "api/channels/show"
    else
      render @channel.errors.full_messages
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :private, :is_direct)
  end
end
