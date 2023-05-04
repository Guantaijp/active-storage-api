Rails.application.routes.draw do
  resources :posts

  get '/latest', to: 'posts#latest'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
