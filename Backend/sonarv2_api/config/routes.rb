Rails.application.routes.draw do
  resources :readings
  resources :sensors, param: :new_id
  resources :groups
  resources :users, param: :name
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
