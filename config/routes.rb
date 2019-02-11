Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy]
    resources :channels, only: [:create, :show, :index, :update] do
      resources :users, only: [:index]
      resources :messages, only: [:index]
    end
    resources :subscriptions, only: [:create]
  end
end
