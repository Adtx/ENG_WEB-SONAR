require_relative 'xdk'

print 'ID: '
new_id = gets.chomp.to_i

print 'INTERVALO: '
sensor_interval = gets.chomp.to_i

print 'MIN: '
minNoise = gets.chomp.to_i

print 'MAX: '
maxNoise = gets.chomp.to_i

print 'INTERIOR OU EXTERIOR: '
dentroOuFora = gets.chomp.to_i

if(dentroOuFora == 'interior') 
  latitude = nil
  longitude = nil
  print 'LOCALIZAÇÃO: '
  location = gets.chomp.to_i
else 
  location = nil
  latitude = rand(-200.000..200.000)
  longitude = rand(-200.000..200.000)
end

print 'NOME DO GRUPO: '
group_name = gets.chomp


xdk = XDK.new(new_id, location, sensor_interval, minNoise, maxNoise, group_name, latitude, longitude)

xdk.start(sensor_interval)

while sensor_interval != 0 do
	print 'NOVO INTERVALO: '
	sensor_interval = gets.chomp.to_i
end