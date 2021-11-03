class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
end
