import { Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';

export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: HomeComponent },
    { path: 'properties/:group/:id', component: PropertiesComponent },
    { path: 'properties', redirectTo: 'properties/all/all', pathMatch: 'full' },
    { path: 'properties/all', redirectTo: 'properties/all/all', pathMatch: 'full' },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    PropertiesComponent,
    MapsComponent,
    NotificationsComponent,
    LoginComponent
]
