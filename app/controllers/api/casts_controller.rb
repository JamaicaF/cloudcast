class Api::CastsController < ApplicationController

  def index
    @casts = Cast.all.includes(:user)
  end

  def show
    @cast = Cast.find(params[:id])
  end

  def create
    @cast = Cast.new(cast_params)
    @cast.user_id = current_user.id
    if @cast.save
      render :show
    else
      render json: @cast.errors.full_messages, status: 422
    end
  end

  def update
    @cast = current_user.casts.find(params[:id])
    if @cast.update(cast_params)
      render :show
    else
      render json: @cast.errors.full_messages, status: 406
    end
  end

  def destroy
    @cast = cast.find(params[:id])
    @cast.destroy
    render json: {}
  end

  private

  def cast_params
    params.require(:cast).permit(:title, :description, :cast_audio, :cast_image)
  end
end
