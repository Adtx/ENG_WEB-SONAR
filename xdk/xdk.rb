require 'httparty'

class XDK

	NOISE_RANGE = 10..80
	DEGREES_RANGE = 0..90
	TIME_RANGE = 0..59

    def change_position()
    	rand = rand(2);
		dir1 = 'N'*rand + 'S'*(1-rand);
		rand = rand(2);
		dir2 = 'W'*rand + 'E'*(1-rand);
		new_position = "#{rand(DEGREES_RANGE)}º #{rand(TIME_RANGE).to_i}' #{rand(TIME_RANGE).to_i}'' #{dir1} |"
		new_position += " #{rand(DEGREES_RANGE)}º #{rand(TIME_RANGE).to_i}' #{rand(TIME_RANGE).to_i}'' #{dir2}"
		@position = new_position
    end

	def initialize(id)
		@id = id
		@position = change_position()
		@noise_thread = nil
		@position_thread = Thread.new {
			loop {
				change_position()
				sleep(3)
			}
		}
	end

	def stop_sensor()
		@noise_thread.kill
	end
		
	def start(sleep_time)
		thread = Thread.new {
			loop {
				value = rand(NOISE_RANGE).to_s
				timestamp = Time.now.strftime("%Y-%m-%d %H:%M:%S")

				options = {
				  body: {
				    reading: { # your resource
				      sensor_id: @id,
				      value: value, # your columns/data
				      position: @position,
				      timestamp: timestamp
				    }
				  }
				}

				HTTParty.post('http://localhost:3000/readings', options)

				sleep(sleep_time)
			}
		}
		@noise_thread = thread
	end
end