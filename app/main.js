"use strict";
// Imports for loading & configuring the in-memory web api
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var index_1 = require('./shared/index');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var core_1 = require('angular2-google-maps/core');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_2.HTTP_PROVIDERS,
    core_1.GOOGLE_MAPS_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: index_1.MockTasksDatabase } // in-mem server data
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map