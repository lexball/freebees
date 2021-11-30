Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"
  get "/items/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :update, :show]
    end
  end
end
