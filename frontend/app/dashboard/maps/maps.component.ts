declare var google: any;
import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';

import { Sensor } from '../../sensor';
import { SensorService } from '../../sensor.service';


@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html',
    animations: [
        trigger('maps', [
            state('*', style({
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                    }),
                    animate('1s 0s ease-out')
                ])
        ])
    ]
})

export class MapsComponent implements OnInit {

    sensors: any[];

    ngOnInit() {

        this.sensorService.getSensorsRest()
            .subscribe(sensors => {                
            
            
                this.sensors = sensors; 

                var myCenter: any;

                var locations = [];

                
                for (let sensor of this.sensors){
                    //locations.push([sensor.new_id.toString(), (-33.790542)+Math.random()/20, 151.274856+Math.random()/20]);
                    if (sensor.latitude!=null){
                        locations.push([sensor.new_id.toString(), sensor.group_name, sensor.latitude, sensor.longitude]);
                    }
                    /*else{
                        alert(sensor.new_id);
                        locations.push([sensor.new_id.toString(), (-33.790542)+Math.random()/20, 151.274856+Math.random()/20]);
                    }*/
                }    

                var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: new google.maps.LatLng(locations[0][2], locations[0][3]),
                mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                var infowindow = new google.maps.InfoWindow();

                var marker, i;

                /*            
                for (let location of locations){
                    alert(location);
                }
                */

                for (i = 0; i < locations.length; i++) {  
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][2], locations[i][3]),
                    title: 'Sensor: ' + locations[i][0] + '\nGrupo: ' + locations[i][1] + '\nLatitude: ' + locations[i][2] + '\nLongitude: ' + locations[i][3],
                    map: map
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                    infowindow.setContent('Sensor: ' + locations[i][0] + '<br>Grupo: ' + locations[i][1] + '<br>Latitude: ' + locations[i][2] + '<br>Longitude: ' + locations[i][3]);
                    infowindow.open(map, marker);
                    }
                })(marker, i));
                }
            });


    


    }

    constructor(private sensorService: SensorService) {}
}
