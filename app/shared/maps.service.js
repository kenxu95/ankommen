"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MapService = (function () {
    function MapService(http) {
        this.http = http;
        this.geocodingUrl = "maps.googleapis.com/maps/api/geocode";
    }
    /* Obtain latitude and longitude from human-readable address */
    MapService.prototype.geocode = function (address) {
        this.http.get(this.geocodingUrl, {})
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res.data); }, function (error) { return console.log("Error: " + error); }, function () { return console.log("Finished"); });
    };
    MapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=maps.service.js.map