class CreateReadings < ActiveRecord::Migration[5.1]
  def change
    create_table :readings do |t|
      t.integer :noise
      t.integer :sensor_id
      t.datetime :timestamp

      t.timestamps
    end
  end
end
