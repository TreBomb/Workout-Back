class WorkoutExercisesController < ApplicationController
    def index
        @workout_exercises = WorkoutExercise.all

        render json: @workout_exercises
    end

    def create
        @workout_exercise = WorkoutExercise.new(workout_exercise_params)

        if @workout_exercise.save
            render json: @workout_exercise, status: :created, location: @workout_exercise
        else
            render json: { errors: routine.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @workout_exercise = WorkoutExercise.find(params[:id])
        
        if @workout_exercise.destroy
            render json: { message: "Workout Exercise successfully deleted" }, status: :ok
        else
            render json: { errors: @workout_exercise.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def workout_exercise_params
        params.permit(:workout_id, :exercise_id)
    end

end
