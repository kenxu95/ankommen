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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var index_1 = require('../pickers/index');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var index_2 = require('../shared/index');
var ProfileComponent = (function () {
    function ProfileComponent(dragulaService) {
        this.dragulaService = dragulaService;
        // TODO: Replace this with real assets code when we can fetch asset images
        this.date1 = new Date();
        this.date2 = new Date(this.date1.getFullYear(), this.date1.getMonth(), this.date1.getDay(), this.date1.getHours() + 2, this.date1.getMinutes());
        this.date3 = new Date(this.date1.getFullYear(), this.date1.getMonth(), this.date1.getDay(), this.date1.getHours() + 3, this.date1.getMinutes());
        this.asset1 = new index_2.Asset(1, [
            [{ start: this.date1, end: this.date2 }, { start: this.date2, end: this.date3 }],
            [],
            [],
            [],
            [],
            [],
            []
        ]);
        this.asset2 = new index_2.Asset(2, [
            [],
            [],
            [{ start: this.date1, end: this.date3 }, { start: this.date1, end: this.date2 }],
            [],
            [{ start: this.date1, end: this.date2 }, { start: this.date2, end: this.date3 }],
            [],
            []
        ]);
        this.asset3 = new index_2.Asset(3, [
            [],
            [],
            [{ start: this.date1, end: this.date3 }, { start: this.date1, end: this.date2 }],
            [{ start: this.date1, end: this.date3 }, { start: this.date1, end: this.date2 }],
            [{ start: this.date1, end: this.date2 }, { start: this.date2, end: this.date3 }],
            [],
            []
        ]);
        /* ASSETS VARIABLES */
        this.myAssets = [this.asset1, this.asset2, this.asset3];
        this.newAssetsShow = false;
        /* LOCATIONS VARIABLES */
        this.myLocations = [];
        this.newLocationsShow = false;
        dragulaService.setOptions('assets-bag', { revertOnSpill: true });
        dragulaService.setOptions('locations-bag', { removeOnSpill: true });
    }
    ProfileComponent.prototype.imageClick = function (selectedAsset, event) {
        event.stopPropagation();
        this.selectedAsset = selectedAsset;
    };
    ProfileComponent.prototype.newAssetsClicked = function () {
        event.stopPropagation();
        this.newAssetsShow = true;
    };
    ProfileComponent.prototype.closeNewAssetsClicked = function () {
        event.stopPropagation();
        this.newAssetsShow = false;
    };
    /* Recieves emitted timepicker */
    ProfileComponent.prototype.addTimeRangeToAsset = function (emittedArray) {
        var selectedWeekdays = emittedArray[0];
        var timeRange = emittedArray[1];
        for (var n = 0; n < selectedWeekdays.length; n++) {
            if (selectedWeekdays[n])
                this.selectedAsset.availability[n].push(timeRange);
        }
    };
    /* Recies emitted new-assets-picker */
    ProfileComponent.prototype.addAssets = function (newAssets) {
        for (var _i = 0, newAssets_1 = newAssets; _i < newAssets_1.length; _i++) {
            var newAsset = newAssets_1[_i];
            this.myAssets.push(newAsset);
        }
    };
    /* LOCATION PICKER */
    ProfileComponent.prototype.newLocationsClicked = function () {
        event.stopPropagation();
        this.newLocationsShow = true;
    };
    ProfileComponent.prototype.closeNewLocationsClicked = function () {
        event.stopPropagation();
        this.newLocationsShow = false;
    };
    ProfileComponent.prototype.addLocation = function (newLocation) {
        this.myLocations.push(newLocation);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProfileComponent.prototype, "mockUser", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: "app/dashboard/profile.component.html",
            styleUrls: ["app/dashboard/styles.css", "app/shared/dragula.css"],
            directives: [ng2_dragula_1.Dragula,
                index_1.WeekTimeShowerComponent,
                index_1.WeekTimePickerComponent,
                index_1.NewAssetsPickerComponent,
                index_1.LocationPickerComponent,
                ng2_bootstrap_1.MODAL_DIRECTIVES],
            viewProviders: [ng2_dragula_1.DragulaService, ng2_bootstrap_1.BS_VIEW_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map