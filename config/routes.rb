Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"
  get "/items/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :show]
    end
  end
end
