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
            @exercises = Exercise.where("name like ?", "%" + params[:filter].downcase + "%").or(Exercise.where("target like ?", "%" + params[:filter].downcase + "%")).or(Exercise.where("equipment like ?", "%" + params[:filter].downcase + "%"))
        end

        if params[:target]
            if params[:target] == "Legs" or params[:target] == "Lower Body"
                @options = ["upper legs", "lower legs"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "Arms"
                @options = ["upper arms", "lower arms"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "Chest/Triceps"
                @options = ["chest", "upper arms", "lower arms"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "Back/Biceps"
                @options = ["back", "upper arms", "lower arms"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "Legs/Shoulders"
                @options = ["upper legs", "lower legs", "shoulders"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "Triceps" or params[:target] == "Biceps"
                @options = ["upper arms", "lower arms"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "Core"
                @muscles = @exercises.where(muscle_group: "waist")
            elsif params[:target] == "Upper Body"
                @options = ["chest", "upper arms", "lower arms", "back", "shoulders", "waist"]
                @muscles = @exercises.where(muscle_group: @options)
            elsif params[:target] == "all"
                @muscles = @exercises.all
            else
                @muscles = @exercises.where(muscle_group: params[:target].downcase)
            end
        else
            @muscles = @exercises.all
        end

        render json: @muscles.shuffle
    end
end
