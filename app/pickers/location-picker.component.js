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
var index_1 = require('../shared/index');
var core_2 = require('angular2-google-maps/core');
var LocationPickerComponent = (function () {
    function LocationPickerComponent(mapsService) {
        this.mapsService = mapsService;
        this.newLoc = new core_1.EventEmitter();
        this.foundAddressesLimit = 10;
        this.address = "";
        this.radius = 50;
        this.numSubmitted = 0;
    }
    /* Search for the address to fill foundAddresses */
    LocationPickerComponent.prototype.searchClicked = function () {
        var _this = this;
        /* Clear the previous search */
        this.foundAddresses = [];
        /* Fill found addresses with results */
        this.mapsService.geocode(this.address)
            .subscribe(function (res) {
            var limit = Math.min(_this.foundAddressesLimit, res.results.length);
            for (var n = 0; n < limit; n++) {
                _this.foundAddresses.push(res.results[n]);
            }
        }, function (error) { return console.log("Error: " + error); }, function () { });
    };
    /* Display on the map */
    LocationPickerComponent.prototype.addressClicked = function (result) {
        this.chosenAddress = result.formatted_address;
        this.lat = result.geometry.location.lat;
        this.lng = result.geometry.location.lng;
    };
    LocationPickerComponent.prototype.radiusChanged = function (newRadius) {
        this.radius = Math.round((newRadius / 1000) * 10) / 10; // round to 1 decimal place
    };
    /* Submit the location */
    LocationPickerComponent.prototype.submitLocation = function () {
        var newLocation = new index_1.Location();
        newLocation.address = this.chosenAddress;
        newLocation.lat = this.lat;
        newLocation.lng = this.lng;
        newLocation.radius = this.radius;
        this.newLoc.emit(newLocation);
        this.numSubmitted++;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LocationPickerComponent.prototype, "newLoc", void 0);
    LocationPickerComponent = __decorate([
        core_1.Component({
            selector: 'location-picker',
            templateUrl: 'app/pickers/location-picker.component.html',
            styleUrls: ['app/pickers/location-picker.css'],
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES],
            providers: [index_1.MapsService]
        }), 
        __metadata('design:paramtypes', [index_1.MapsService])
    ], LocationPickerComponent);
    return LocationPickerComponent;
}());
exports.LocationPickerComponent = LocationPickerComponent;
//# sourceMappingURL=location-picker.component.js.map