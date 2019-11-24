Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'yunnan', to: 'pages#yunnan', as: :yunnan
  get 'our_tours', to: 'pages#our_tours', as: :our_tours
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'
  get 'home_spanish', to: 'pages#home_spanish', as: :home
  get 'our_tours_spanish', to: 'pages#our_tours_spanish'
  get 'yunnan_spanish', to: 'pages#yunnan_spanish'
  get 'quien_somos', to: 'pages#quien_somos'
  get 'contacto', to: 'pages#contacto'
end

