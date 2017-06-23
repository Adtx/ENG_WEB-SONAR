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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var sensor_service_1 = require('../../sensor.service');
require('rxjs/add/operator/switchMap');
var PropertiesComponent = (function () {
    function PropertiesComponent(route, location, sensorService, http) {
        this.route = route;
        this.location = location;
        this.sensorService = sensorService;
        this.http = http;
    }
    PropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.selectedSensorId = params['id'];
            _this.selectedSensorGroup = params['group'];
        });
        this.sensorService.getSensorsRest()
            .subscribe(function (sensors) { return _this.sensors = sensors; });
        /*this.sensorService.getSensorRest(this.selectedSensorId)
        .subscribe(sensor => {this.selectedSensor = sensor;
                            alert(sensor.maximumNoise);});*/
        //.then(sensors => this.sensors = sensors);
        /*for (var i=0; i<this.sensors.length; i++){
            if (this.sensors[i].id == this.selectedSensorId && this.sensors[i].group == this.selectedSensorGroup){
                this.selectedSensor = this.sensors[i];
            }
        }*/
        //this.selectedSensor = {id: 'Café Juno', group: 'Centro histórico', latency: 4, minimum: 42, maximum: 107};
    };
    PropertiesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PropertiesComponent.prototype.updateSensor = function (min, max) {
        var data = {
            minimumNoise: min,
            maximumNoise: max
        };
        console.log(data);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put("http://localhost:5000/sensors/" + this.selectedSensorId, JSON.stringify(data), options)
            .map(function (res) { return res.json(); })
            .subscribe();
    };
    PropertiesComponent.prototype.deleteSensor = function (new_id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.delete("http://localhost:5000/sensors/" + new_id, options)
            .map(function (res) { return res.json(); })
            .subscribe();
    };
    PropertiesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-cmp',
            templateUrl: 'properties.component.html',
            providers: [sensor_service_1.SensorService],
            animations: [
                core_1.trigger('carduserprofile', [
                    core_1.state('*', core_1.style({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1
                    })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        core_1.animate('0.3s 0s ease-out'),
                    ])
                ]),
                core_1.trigger('cardprofile', [
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
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, sensor_service_1.SensorService, http_1.Http])
    ], PropertiesComponent);
    return PropertiesComponent;
}());
exports.PropertiesComponent = PropertiesComponent;
//# sourceMappingURL=properties.component.js.map