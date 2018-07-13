class Api::CastsController < ApplicationController

  def index
    @casts = Cast.all
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
    if @link.update(link_params)
      render :show
    else
      render json: @cast.errors.full_messages, status: 406
    end
  end

  def destroy
    @cast = cast.find(params[:id])
    @cast.destroy
    render :index
  end

  private

  def cast_params
    params.require(:cast).permit(:title, :description)
  end
end
