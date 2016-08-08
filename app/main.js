"use strict";
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { MockTasksDatabase } from './shared/index';
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var core_1 = require('angular2-google-maps/core');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    core_1.GOOGLE_MAPS_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    { provide: core_1.LazyMapsAPILoaderConfig, useFactory: function () {
            var config = new core_1.LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyB1pb7Ppr6s5xroLDrvrj24jK1pHiib4Pk'; //TODO: store secretly
            return config;
        } }
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map