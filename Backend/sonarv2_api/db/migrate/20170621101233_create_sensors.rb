class CreateSensors < ActiveRecord::Migration[5.1]
  def change
    create_table :sensors do |t|
      t.string :location
      t.integer :frequency
      t.integer :minimumNoise
      t.integer :maximumNoise
      t.float :latitude
      t.float :longitude
      t.string :group_name

      t.timestamps
    end
  end
end
