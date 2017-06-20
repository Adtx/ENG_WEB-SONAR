class Sensor < ApplicationRecord
  has_many :readings
  belongs_to :group, optional: true
end
