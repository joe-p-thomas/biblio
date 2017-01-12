Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :bookshelves, only: [:index, :create, :update, :destroy]
    resources :books, only: [:index, :show, :update, :destroy, :create]
  end

end
