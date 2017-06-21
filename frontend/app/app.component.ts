import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Service } from './shared/service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit{

    location: Location;
    loggedIn: boolean = false;
    
    constructor(location:Location/*, private service: Service*/) {
        this.location = location;
    }
    
    ngOnInit(){
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
        //this.service.subject.subscribe(value => this.loggedIn = value);
    }

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        this.loggedIn = Service.signedIn;
    }

    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path === titlee){
            return true;
        }
        else {
            return false;
        }
    }
}
