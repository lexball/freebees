class Api::V1::ItemsController < ApiController
  def index
    render json: {items: Item.all}
  end

  def show
    render json: {items: Item.find(params[:id])}
  end
end