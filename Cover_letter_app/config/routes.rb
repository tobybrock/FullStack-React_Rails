Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    resources :resumes
  end
  #catch all for anything that hasn't matched above
  get '*path', to: 'react#react_app', format:false

end
