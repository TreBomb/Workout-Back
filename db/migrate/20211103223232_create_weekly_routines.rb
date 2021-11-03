class CreateWeeklyRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :weekly_routines do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.integer :workout1_id
      t.integer :workout2_id
      t.integer :workout3_id
      t.integer :workout4_id
      t.integer :workout5_id

      t.timestamps
    end
  end
end
