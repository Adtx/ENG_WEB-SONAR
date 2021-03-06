require 'test_helper'

class SensorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sensor = sensors(:one)
  end

  test "should get index" do
    get sensors_url, as: :json
    assert_response :success
  end

  test "should create sensor" do
    assert_difference('Sensor.count') do
      post sensors_url, params: { sensor: { frequency: @sensor.frequency, group_name: @sensor.group_name, latitude: @sensor.latitude, location: @sensor.location, longitude: @sensor.longitude, maximumNoise: @sensor.maximumNoise, minimumNoise: @sensor.minimumNoise, new_id: @sensor.new_id } }, as: :json
    end

    assert_response 201
  end

  test "should show sensor" do
    get sensor_url(@sensor), as: :json
    assert_response :success
  end

  test "should update sensor" do
    patch sensor_url(@sensor), params: { sensor: { frequency: @sensor.frequency, group_name: @sensor.group_name, latitude: @sensor.latitude, location: @sensor.location, longitude: @sensor.longitude, maximumNoise: @sensor.maximumNoise, minimumNoise: @sensor.minimumNoise, new_id: @sensor.new_id } }, as: :json
    assert_response 200
  end

  test "should destroy sensor" do
    assert_difference('Sensor.count', -1) do
      delete sensor_url(@sensor), as: :json
    end

    assert_response 204
  end
end
