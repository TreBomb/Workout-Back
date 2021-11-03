class WeeklyRoutinesController < ApplicationController
    def index
        @weekly_routines = WeeklyRoutine.all

        render json: @weekly_routines
    end

    def show
        @weekly_routine = WeeklyRoutine.find(params[:id])

        if @weekly_routine
            render json: @weekly_routine
        else
            render json: {error: "Weekly routine not found"}, status: :not_found
        end
    end

    def create
        routine = WeeklyRoutine.create(routine_params, goal: nil)

        if routine.valid?
            render json: routine, status: :created
        else
            render json: { errors: routine.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @weekly_routine = WeeklyRoutine.find(params[:id])

        if @weekly_routine.destroy
            render json: {message: "Weekly routine deleted"}, status: :ok
        else
            render json: {error: "Weekly routine not found"}, status: :unprocessable_entity
        end
    end

    private

    def routine_params
        params.permit(:user_id, :name, :workout1_id, :workout2_id, :workout3_id, :workout4_id, :workout5_id)
    end
end
