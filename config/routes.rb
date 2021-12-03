Rails.application.routes.draw do
  devise_for :users

  root "homes#index"
  get "/items/new", to: "homes#index"
  get "/items/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :show, :create]
    end
    resources :users, only: [:index]
  end
end
