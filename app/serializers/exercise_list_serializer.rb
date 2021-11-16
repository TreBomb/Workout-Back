class ExerciseListSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :exercises
end
