Rails.application.routes.draw do
  root to: 'spanish#casa'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'home_en', to: 'pages#home_en'
  get 'yunnan', to: 'pages#yunnan', as: :yunnan
  get 'our_tours', to: 'pages#our_tours', as: :our_tours
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'

  #spanish
  get 'casa', to: 'spanish#casa', as: :home
  get 'yunnan_es', to: 'spanish#yunnan_es'
  get 'nuestro_tours', to: 'spanish#nuestro_tours'
  get 'quien_somos', to: 'spanish#quien_somos'
  get 'contacto', to: 'spanish#contacto'

  #french
  get 'accueil', to: 'french#accueil'
  get 'yunnan_fr', to: 'french#yunnan_fr'
  get 'circuits', to: 'french#circuits'
  get 'a_propos', to: 'french#apropos'
  get 'contact_fr', to: 'french#contact_fr'
end

