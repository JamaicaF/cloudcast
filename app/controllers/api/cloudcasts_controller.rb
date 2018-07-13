class Api::CloudcastsController < ApplicationController

  def index
    @cloudcasts = Cloudcast.all
  end

  def show
    @cloudcast = Cloudcast.find(params[:id])
  end

  def create
    @cloudcast = Cloudcast.new(cloudcast_params)
    @cloudcast.user_id = current_user.id
    if @cloudcast.save
      render :show
    else
      render json: @cloudcast.errors.full_messages, status: 422
    end
  end

  def update
    @cloudcast = current_user.cloudcasts.find(params[:id])
    if @link.update(link_params)
      render :show
    else
      render json: @cloudcast.errors.full_messages, status: 406
    end
  end

  def destroy
    @cloudcast = Cloudcast.find(params[:id])
    @cloudcast.destroy
    render :index
  end

  private

  def cloudcast_params
    params.require(:cloudcast).permit(:title, :description)
  end
end
