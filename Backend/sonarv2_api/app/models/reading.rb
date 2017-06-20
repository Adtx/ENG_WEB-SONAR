class Reading < ApplicationRecord
  belongs_to :sensor, optional: true
end
