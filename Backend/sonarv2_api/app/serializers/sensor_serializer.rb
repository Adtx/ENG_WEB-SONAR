class SensorSerializer < ActiveModel::Serializer
  attributes :id, :location, :frequency, :minimumNoise, :maximumNoise, :group_id
end
