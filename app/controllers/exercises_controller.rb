class ExercisesController < ApplicationController
    def index
        @exercises = Exercise.all

        render json: @exercises
    end

    def show
        @exercise = Exercise.find(params[:id])

        if @exercise
            render json: @exercise
        else
            render json: {error: "Exercise not found"}, status: 404
        end
    end

    def filter
        if params[:filter] == "all"
            @exercises = Exercise.all
        else
            @exercises = Exercise.where("name like ?", "%" + params[:filter] + "%").or(Exercise.where("target like ?", "%" + params[:filter] + "%")).or(Exercise.where("equipment like ?", "%" + params[:filter] + "%"))
        end

        if params[:target]
            if params[:target] == "legs"
                @options = ["upper legs", "lower legs"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "arms"
                @options = ["upper arms", "lower arms"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "all"
                @muscles = @exercises.all
            else
                @muscles = @exercises.where(muscle_group: params[:target])
            end
        else
            @muscles = @exercises.all
        end

        render json: @muscles.shuffle
    end
end
