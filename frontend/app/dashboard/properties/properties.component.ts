import { Component,OnInit,OnDestroy,state,style,animate,transition, trigger, keyframes } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Sensor } from '../../sensor';
import { SensorService } from '../../sensor.service';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'properties.component.html',
    providers: [SensorService],
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
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
            ])
        ]
    })


export class PropertiesComponent implements OnInit, OnDestroy {

        selectedSensorId: string;
        selectedSensorGroup: string;
        selectedSensor: Sensor;
        sensors: Sensor[];
        private sub: any;

        ngOnInit(): void {
            this.sub = this.route.params.subscribe(params => {
                this.selectedSensorId = params['id'];
                this.selectedSensorGroup = params['group'];
            });

            this.sensorService.getSensorsRest()
            .subscribe(sensors => this.sensors = sensors);

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
        }

        ngOnDestroy() {
            this.sub.unsubscribe();
        }

        updateSensor(min, max){ 
   
           let data = {
              minimumNoise: min,
              maximumNoise: max
          }

          console.log(data);

          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.put(`http://localhost:5000/sensors/${this.selectedSensorId}`, JSON.stringify(data), options)
                     .map(res => res.json())
                     .subscribe();


        }

        deleteSensor(new_id){
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.delete(`http://localhost:5000/sensors/${new_id}`, options)
                  .map(res => res.json())
                  .subscribe();


        }




        constructor(
            private route: ActivatedRoute,
            private location: Location,
            private sensorService: SensorService,
            private http:Http
        ) {}

    }
