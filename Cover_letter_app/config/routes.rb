Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users
    resources :resumes do
      resources :educations
      resources :experiences
      resources :projects
    end
    get 'auth/status', to: 'auth#status'
    post 'auth/login', to: 'auth#login'
    post 'auth/logout', to: 'auth#logout'
  end

  # catch all
  # get '*path', to: 'react#react_app', format:false

end
