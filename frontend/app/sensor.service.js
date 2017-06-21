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
var mock_sensors_1 = require('./mock-sensors');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var SensorService = (function () {
    function SensorService(http) {
        this.http = http;
    }
    SensorService.prototype.getSensors = function () {
        return Promise.resolve(mock_sensors_1.SENSORS);
    };
    SensorService.prototype.getSensorsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getSensors()); }, 1000);
        });
    };
    SensorService.prototype.getSensorsRest = function () {
        var res = this.http.get("http://pcogdashboard.azurewebsites.net/api/DashboardsFetch/adriano/dash0")
            .map(function (response) { return response.json(); });
        return res;
    };
    SensorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SensorService);
    return SensorService;
}());
exports.SensorService = SensorService;
//# sourceMappingURL=sensor.service.js.map