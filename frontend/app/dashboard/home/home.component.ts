import {Component, OnInit,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import initNotify = require('../../../assets/js/notify.js');

import { Sensor } from '../../sensor';
import { SensorService } from '../../sensor.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs';
import { AlertService } from '../../alert.service'

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'home-cmp',
    templateUrl: 'home.component.html',
    animations: [
        trigger('cardemail', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0s ease-out')
                ])
        ]),
        trigger('carduser', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.25s ease-out')
                ])
        ]),
        trigger('card2014sales', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.5s ease-out')
                ])
        ]),
        trigger('cardtasks', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.75s ease-out')
                ])
        ])
    ]


})

export class HomeComponent implements OnInit{


    sensors: any[];
    readings: any[];
    myMap = new Map<string, Sensor>();
    sensorsMap: {[sensor_id:string]:{id: number, new_id: number, location: string, frequency: number, minimumNoise: number, maximumNoise: number, latitude: number, longitude: number, group_name: string}} = {};


    ngOnInit() {
        // $.getScript('../../../assets/js/bootstrap-checkbox-radio-switch.js');
        // $.getScript('../../../assets/js/light-bootstrap-dashboard.js');

        $('[data-toggle="checkbox"]').each(function () {
            if($(this).data('toggle') == 'switch') return;

            var $checkbox = $(this);
            $checkbox.checkbox();
        });
        initDemo();
        //initNotify();

        //this.sensors = this.sensorService.getCachedSensors();

        /*this.sensorService.getSensorsRest()
            .subscribe(sensors => this.sensors = sensors);*/

        this.sensorService.getSensorsRest()
            .subscribe(sensors => {
                this.sensors = sensors
                for(let sensor of sensors)
                    this.sensorsMap[sensor.new_id] = sensor;
                this.sensorService.getReadingsRest()
                .subscribe(readings => {
                    this.readings = readings.reverse();
                    for(let reading of this.readings){
                        if(reading.noise < this.sensorsMap[reading.sensor_id].minimumNoise || reading.noise > this.sensorsMap[reading.sensor_id].maximumNoise){
                            console.log('ALERTA!!!!!!!!' + reading.noise + ' ' + this.sensorsMap[reading.sensor_id].minimumNoise + ' ' + this.sensorsMap[reading.sensor_id].maximumNoise)
                            AlertService.add(`SENSOR ${reading.sensor_id}: leitura = ${reading.noise}   intervalo = [${this.sensorsMap[reading.sensor_id].minimumNoise},${this.sensorsMap[reading.sensor_id].maximumNoise}] + timestamp = ${reading.timestamp}`);
                        }
                        //console.log(reading.noise + ' ' + this.sensorsMap[reading.sensor_id].minimumNoise + ' ' + this.sensorsMap[reading.sensor_id].maximumNoise)
                    }

                })
            });
    }

    getSensor(id: string): Sensor{
        return this.myMap.get(id);
    }


    constructor(private sensorService: SensorService, private http: Http) {}
}
