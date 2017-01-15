Rails.application.routes.draw do
  root 'static_pages#index'

  get '/api/books/users_books', to: 'api/books#users_books'
  get 'api/books/detail/:id', to: 'api/books#book_detail'
  get '/api/books/search', to: 'api/books#search_books'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :bookshelves, only: [:index, :create, :update, :destroy]
    resources :books, only: [:index, :show, :update, :destroy, :create]
  end

end
