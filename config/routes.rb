Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'yunnan', to: 'pages#yunnan', as: :yunnan
  get 'our_tours', to: 'pages#our_tours', as: :our_tours
  get 'about', to: 'pages#about'
end

