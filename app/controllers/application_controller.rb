class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private
  
    def current_user
      @current_user ||= session[:user_id] && User.find_by(id: session[:user_id])
    end
  
    def confirm_authentication
      render json: { error: "You must be logged in to do that." }, status: :unauthorized unless @current_user
    end
  end
