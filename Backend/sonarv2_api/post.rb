require 'httparty'
require 'pp'


# An example post to a minimal rails app in the development environment
# Note that "skip_before_filter :verify_authenticity_token" must be set in the
# "pears" controller for this example

#class Partay
#  include HTTParty
#  base_uri 'http://localhost:3000'
#end


options = {
  body: {
    sensor: { # your resource
      location: 'cp2',
      frequency: 2, 
      maximumNoise: 20,
      minimumNoise: 10,
      group_id: 1  
    }
  }
}

# You can also use post, put, delete, head, options in the same fashion
response = HTTParty.post('http://localhost:3000/sensors', options)
puts response.body, response.code, response.message, response.headers.inspect

#result = HTTParty.post(url, body: query.to_json, headers: {'Content-Type' => 'application/json'})


#pp Partay.post('/pears.xml', options)