class SensorSerializer < ActiveModel::Serializer
  attributes :id, :location, :frequency, :minimumNoise, :maximumNoise, :latitude, :longitude, :group_name
end
