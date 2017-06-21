class SensorSerializer < ActiveModel::Serializer
  attributes :id, :new_id, :location, :frequency, :minimumNoise, :maximumNoise, :latitude, :longitude, :group_name
end
