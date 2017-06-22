import {Component, OnInit,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import initNotify = require('../../../assets/js/notify.js');

import { Sensor } from '../../sensor';
import { SensorService } from '../../sensor.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs';

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
            .subscribe(sensors => this.sensors = sensors);

        this.sensorService.getReadingsRest()
                .subscribe(readings => this.readings = readings.reverse())




            /*.map((response: Response) => <any[]>response.json())
            .expand(() => Observable.timer(1000).concatMap(() => data))
            .subscribe(readings => this.readings = readings.reverse());*/
    }

    getSensor(id: string): Sensor{
        return this.myMap.get(id);
    }


    constructor(private sensorService: SensorService, private http: Http) {}
}
