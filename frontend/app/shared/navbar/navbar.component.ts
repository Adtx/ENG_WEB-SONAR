import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Service } from '../../shared/service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    notificationsNumber: number;
    notifications: string[];

    constructor(location:Location, private router: Router) {
        this.location = location;
        this.notificationsNumber = 7;
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.notifications = ['Notificação 1', 'Notificação 2', 'Notificação 3', 'Notificação 4', 'Notificação 5', 'Notificação 6', 'Notificação 7'];
    }
    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

    func1() {
        Service.signedIn = false;
        this.router.navigate(['login']);
    }
}
