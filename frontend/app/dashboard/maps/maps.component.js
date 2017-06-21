"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sensor_service_1 = require("../../sensor.service");
var MapsComponent = (function () {
    function MapsComponent(sensorService) {
        this.sensorService = sensorService;
    }
    MapsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sensorService.getSensorsRest()
            .subscribe(function (sensors) {
            _this.sensors = sensors;
            var locations = [];
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: new google.maps.LatLng((-33.790542) + Math.random() / 20, 151.274856 + Math.random() / 20),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var infowindow = new google.maps.InfoWindow();
            var marker, i;
            for (var _i = 0, _a = _this.sensors; _i < _a.length; _i++) {
                var sensor = _a[_i];
                //locations.push([sensor.new_id.toString(), (-33.790542)+Math.random()/20, 151.274856+Math.random()/20]);
                if (sensor.latitude != null) {
                    locations.push([sensor.new_id.toString(), sensor.latitude, sensor.latitude]);
                }
                else {
                    locations.push([sensor.new_id.toString(), (-33.790542) + Math.random() / 20, 151.274856 + Math.random() / 20]);
                }
            }
            /*
            for (let location of locations){
                alert(location);
            }
            */
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    title: 'Sensor: ' + locations[i][0] + '\nLatitude: ' + locations[i][1] + '\nLongitude: ' + locations[i][2],
                    map: map
                });
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent('Sensor: ' + locations[i][0] + '<br>Latitude: ' + locations[i][1] + '<br>Longitude: ' + locations[i][2]);
                        infowindow.open(map, marker);
                    };
                })(marker, i));
            }
        });
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'maps-cmp',
        templateUrl: 'maps.component.html',
        animations: [
            core_1.trigger('maps', [
                core_1.state('*', core_1.style({
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                    }),
                    core_1.animate('1s 0s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [sensor_service_1.SensorService])
], MapsComponent);
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=maps.component.js.map