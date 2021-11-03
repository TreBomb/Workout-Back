Rails.application.routes.draw do
  #General routes
  resources :workout_exercises, only: [:index, :create, :destroy]
  resources :exercises, only: [:index, :show]
  resources :weekly_routines, only: [:index, :show, :create, :destroy]
  resources :workouts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  #Custom routes
  get "/hello", to: "application#hello_world"
end
