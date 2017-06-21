import { Injectable } from '@angular/core';

import { Sensor } from './sensor';
import { SENSORS } from './mock-sensors';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs';


@Injectable()
export class SensorService {

    constructor(private http: Http) { }

    getSensors(): Promise<Sensor[]>{
        return Promise.resolve(SENSORS);
    }

    getSensorsSlowly(): Promise<Sensor[]>{
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getSensors()), 1000);
        });
    }

    /*getSensorsRest(): Observable<any[]>{
       var res = this.http.get(`http://pcogdashboard.azurewebsites.net/api/DashboardsFetch/adriano/dash0`)
            .map((response: Response) => <any[]>response.json());
        return res;
    }*/

    getSensorsRest(): Observable<any[]>{
       var res = this.http.get(`http://localhost:7000/sensors`)
            .map((response: Response) => <any[]>response.json());
        return res;
    }

    getReadingsRest(): Observable<any[]>{
       var res = this.http.get(`http://localhost:7000/readings`)
            .map((response: Response) => <any[]>response.json());
        return res;
    }

}