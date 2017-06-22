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
var core_1 = require('@angular/core');
var initDemo = require('../../../assets/js/charts.js');
var sensor_service_1 = require('../../sensor.service');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var alert_service_1 = require('../../alert.service');
var HomeComponent = (function () {
    function HomeComponent(sensorService, http) {
        this.sensorService = sensorService;
        this.http = http;
        this.myMap = new Map();
        this.sensorsMap = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/bootstrap-checkbox-radio-switch.js');
        // $.getScript('../../../assets/js/light-bootstrap-dashboard.js');
        var _this = this;
        $('[data-toggle="checkbox"]').each(function () {
            if ($(this).data('toggle') == 'switch')
                return;
            var $checkbox = $(this);
            $checkbox.checkbox();
        });
        initDemo();
        //initNotify();
        //this.sensors = this.sensorService.getCachedSensors();
        /*this.sensorService.getSensorsRest()
            .subscribe(sensors => this.sensors = sensors);*/
        this.sensorService.getSensorsRest()
            .subscribe(function (sensors) {
            _this.sensors = sensors;
            for (var _i = 0, sensors_1 = sensors; _i < sensors_1.length; _i++) {
                var sensor = sensors_1[_i];
                _this.sensorsMap[sensor.new_id] = sensor;
            }
            _this.sensorService.getReadingsRest()
                .subscribe(function (readings) {
                _this.readings = readings.slice(-5).reverse();
                for (var _i = 0, _a = _this.readings; _i < _a.length; _i++) {
                    var reading = _a[_i];
                    if (reading.noise < _this.sensorsMap[reading.sensor_id].minimumNoise || reading.noise > _this.sensorsMap[reading.sensor_id].maximumNoise) {
                        //console.log('ALERTA!!!!!!!!' + reading.noise + ' ' + this.sensorsMap[reading.sensor_id].minimumNoise + ' ' + this.sensorsMap[reading.sensor_id].maximumNoise)
                        alert_service_1.AlertService.add("SENSOR " + reading.sensor_id + ": leitura = " + reading.noise + "   intervalo = [" + _this.sensorsMap[reading.sensor_id].minimumNoise + "," + _this.sensorsMap[reading.sensor_id].maximumNoise + "]");
                    }
                }
            });
        });
    };
    HomeComponent.prototype.getSensor = function (id) {
        return this.myMap.get(id);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-cmp',
            templateUrl: 'home.component.html',
            animations: [
                core_1.trigger('cardemail', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0s ease-out')
                    ])
                ]),
                core_1.trigger('carduser', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0.25s ease-out')
                    ])
                ]),
                core_1.trigger('card2014sales', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0.5s ease-out')
                    ])
                ]),
                core_1.trigger('cardtasks', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0.75s ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [sensor_service_1.SensorService, http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map