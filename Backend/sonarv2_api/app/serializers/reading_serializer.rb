class ReadingSerializer < ActiveModel::Serializer
  attributes :id, :noise, :sensor_id, :timestamp
end
