class UsersController < ApplicationController
    def index
        @users = User.all

        render json: @users
    end

    def show
        @user = User.find(params[:id])

        if @user
            render json: @user
        else
            render json: { errors: "User not found" }, status: :not_found
        end
    end

    def create
        user = User.create(user_params, goal: nil)

        if user.valid?
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
    params.require(:name, :email, :password, :password_confirmation)
    end
end
