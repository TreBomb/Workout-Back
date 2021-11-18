class WeeklyRoutinesController < ApplicationController
    def index
        if params[:user_id]
            # @weekly_routines = WeeklyRoutine.where(user_id: params[:user_id])
            @weekly_routines = User.find_by(id: params[:user_id]).weekly_routines
        else
            @weekly_routines = WeeklyRoutine.all
        end

        render json: @weekly_routines
    end

    def show
        if params[:user_id]
            @user_routines = User.find_by(id: params[:user_id]).weekly_routines
            @routine = @user_routines.find_by(id: params[:id])
            @weekly_routine = {
                routine: @routine,
                workouts: [@routine.workout1, @routine.workout2, @routine.workout3, @routine.workout4, @routine.workout5]
            }
        else
            @weekly_routine = WeeklyRoutine.find(params[:id])
        end

        if @weekly_routine
            render json: @weekly_routine
        else
            render json: {error: "Weekly routine not found"}, status: :not_found
        end
    end

    def create
        routine = WeeklyRoutine.new(routine_params)

        if routine.save
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
