"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var properties_component_1 = require("./properties/properties.component");
var notifications_component_1 = require("./notifications/notifications.component");
var maps_component_1 = require("./maps/maps.component");
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'properties/:group/:id', component: properties_component_1.PropertiesComponent },
    { path: 'properties', redirectTo: 'properties/all/all', pathMatch: 'full' },
    { path: 'properties/all', redirectTo: 'properties/all/all', pathMatch: 'full' },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    properties_component_1.PropertiesComponent,
    maps_component_1.MapsComponent,
    notifications_component_1.NotificationsComponent
];
//# sourceMappingURL=dashboard.routes.js.map