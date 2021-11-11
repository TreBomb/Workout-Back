Rails.application.routes.draw do
  #General routes
  resources :workout_exercises, only: [:index, :create, :destroy]
  resources :exercises, only: [:index, :show]
  resources :weekly_routines, only: [:index, :show, :create, :destroy]
  resources :workouts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy] do
    resources :workouts, only: [:index, :show]
    resources :weekly_routines, only: [:index, :show]
  end

  #Custom routes
  get "/hello", to: "application#hello_world"
  get '/account', to: 'users#show'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  post '/exercise-filter', to: 'exercises#filter'
end
