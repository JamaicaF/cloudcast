Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :casts, only: [:index, :show, :create, :update, :destroy]
  end
end
