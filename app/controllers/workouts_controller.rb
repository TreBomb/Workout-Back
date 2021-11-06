class WorkoutsController < ApplicationController
    def index
        if params[:user_id]
            @workouts = Workout.where(user_id: params[:user_id])
        else
            @workouts = Workout.all
        end

        render json: @workouts
    end

    def show
        @workout = Workout.find(params[:id])

        if @workout
            render json: @workout
        else
            render json: {error: "Workout not found"}, status: :not_found
        end
    end

    def create 
        @workout = Workout.new(workout_params)

        if @workout.save
            render json: @workout
        else
            render json: {error: "Workout not created"}, status: :unprocessable_entity
        end
    end

    def destroy
        @workout = Workout.find(params[:id])

        if @workout.destroy
            render json: {message: "Workout deleted"}
        else
            render json: {error: "Workout not deleted"}, status: :unprocessable_entity
        end
    end

    private

    def workout_params
        params.permit(:user_id, :name)
    end
end
