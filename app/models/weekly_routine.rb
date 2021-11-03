class WeeklyRoutine < ApplicationRecord
  belongs_to :user
  belongs_to :workout1, class_name: 'Workout', foreign_key: 'workout1_id'
  belongs_to :workout2, class_name: 'Workout', foreign_key: 'workout2_id'
  belongs_to :workout3, class_name: 'Workout', foreign_key: 'workout3_id'
  belongs_to :workout4, class_name: 'Workout', foreign_key: 'workout4_id'
  belongs_to :workout5, class_name: 'Workout', foreign_key: 'workout5_id'
end
