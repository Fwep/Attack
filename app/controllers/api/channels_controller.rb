class Api::ChannelsController < ApplicationController
  def show
    @messages = Message.all
    @channel = Channel.find_by(id: params[:id])
    if @channel
      render :show
    else
      render json: ["Channel not found"]
    end
  end

  def index
    @channels = Channel.all
    render :index
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :is_private, :is_direct)
  end
end
