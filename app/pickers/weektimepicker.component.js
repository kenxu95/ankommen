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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var index_1 = require('./index');
var index_2 = require('../shared/index');
var WeektimepickerComponent = (function () {
    function WeektimepickerComponent(dateService) {
        this.dateService = dateService;
        this.hstep = 1;
        this.mstep = 15;
        this.ismeridian = false;
    }
    WeektimepickerComponent.prototype.ngOnInit = function () {
        this.startTime = new Date();
        this.endTime = new Date();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_2.Asset)
    ], WeektimepickerComponent.prototype, "asset", void 0);
    WeektimepickerComponent = __decorate([
        core_1.Component({
            selector: 'week-time-picker',
            templateUrl: 'app/pickers/weektimepicker.component.html',
            directives: [ng2_bootstrap_1.TimepickerComponent, core_1.forwardRef(function () { return index_1.WeektimeshowerComponent; })],
            providers: [index_2.DateService]
        }), 
        __metadata('design:paramtypes', [index_2.DateService])
    ], WeektimepickerComponent);
    return WeektimepickerComponent;
}());
exports.WeektimepickerComponent = WeektimepickerComponent;
//# sourceMappingURL=weektimepicker.component.js.map