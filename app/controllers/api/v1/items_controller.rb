class Api::V1::ItemsController < ApiController
  before_action :authenticate_user, only: [:create]

  
  def index
    render json: {items: Item.all}
  end

  def show
    render json: {items: Item.find(params[:id])}
  end

  def create 
    item = Item.new(item_params)

    if item.save
      render json: {response: "Your item was added successfully"}
    else
      errors = item.errors.full_messages.to_sentence
      render json: { response: errors }
    end
  end

    private

    def item_params
      params.require(:item).permit(:title, :category, :description)
    end
end