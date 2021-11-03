class WeeklyRoutineSerializer < ActiveModel::Serializer
  attributes :id, :name, :workout1_id, :workout2_id, :workout3_id, :workout4_id, :workout5_id
  has_one :user
end
