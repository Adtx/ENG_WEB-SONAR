require_relative 'xdk'

print 'ID: '
id = gets.chomp

print 'INTERVALO: '
sensor_interval = gets.chomp.to_i

xdk = XDK.new(id)

xdk.start(sensor_interval)

while sensor_interval != 0 do
	print 'NOVO INTERVALO: '
	sensor_interval = gets.chomp.to_i
end