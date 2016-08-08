// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { MockTasksDatabase } from './shared/index';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

import { GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig } from 'angular2-google-maps/core';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  GOOGLE_MAPS_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  { provide: LazyMapsAPILoaderConfig, useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyB1pb7Ppr6s5xroLDrvrj24jK1pHiib4Pk'; //TODO: store secretly
    return config;
  }}
  // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  // { provide: SEED_DATA, useClass: MockTasksDatabase } // in-mem server data
  ])
  .catch((err: any) => console.error(err));
