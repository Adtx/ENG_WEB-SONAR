require_relative 'xdk'

print 'ID: '
new_id = gets.chomp.to_i

print 'INTERVALO: '
sensor_interval = gets.chomp.to_i

print 'MIN: '
minNoise = gets.chomp.to_i

print 'MAX: '
maxNoise = gets.chomp.to_i

print 'INTERIOR(i) OU EXTERIOR(e): '
dentroOuFora = gets.chomp

if(dentroOuFora == 'i') 
  latitude = nil
  longitude = nil
  print 'LOCALIZAÇÃO: '
  location = gets.chomp
else 
  location = nil
  print 'LATITUDE: '
  latitude = gets.chomp.to_i 
  print 'LONGITUDE: '
  longitude = gets.chomp.to_i
end

print 'NOME DO GRUPO: '
group_name = gets.chomp


xdk = XDK.new(new_id, location, sensor_interval, minNoise, maxNoise, group_name, latitude, longitude)

xdk.start(sensor_interval)

while sensor_interval != 0 do
	print 'NOVO INTERVALO: '
	sensor_interval = gets.chomp.to_i
end