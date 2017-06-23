import { Injectable } from '@angular/core';


@Injectable()
export class AlertService {

    public static alerts: string[];

    constructor() { }

    public static add(alertMessage: string) {
        //alert(alertMessage)
       AlertService.alerts.concat([alertMessage]);
    }

    getAlerts() {
        return AlertService.alerts;
    }
}