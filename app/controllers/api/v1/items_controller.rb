class Api::V1::ItemsController < ApiController
  def index
    render json: {items: Item.all}
  end
end