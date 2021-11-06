class UpdateExercises < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :equipment, :string
    add_column :exercises, :target, :string
  end
end
