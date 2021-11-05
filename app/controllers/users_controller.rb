class UsersController < ApplicationController
    def index
        @users = User.all

        render json: @users
    end

    def show
        user = User.find_by(id: session[:user_id])

        if user
            render json: user, status: :ok
          else
            render json: { error: 'No active session' }, status: :unauthorized
          end
    end

    def create
        user = User.create(user_params)

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render json: @user
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.find(params[:id])

        if @user.destroy
            render json: { message: "User successfully deleted" }, status: :ok
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private

    def user_params
    params.permit(:name, :email, :password, :password_confirmation)
    end
end