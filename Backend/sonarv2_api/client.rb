require_relative 'xdk'

print 'ID: '
id = gets.chomp

print 'INTERVALO: '
sensor_interval = gets.chomp.to_i


minNoise = rand(1..10)
maxNoise = rand(11..20)
group_id = rand(1..10)

xdk = XDK.new(id, sensor_interval, minNoise, maxNoise, group_id)

xdk.start(sensor_interval)

while sensor_interval != 0 do
	print 'NOVO INTERVALO: '
	sensor_interval = gets.chomp.to_i
end