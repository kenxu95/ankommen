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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var WeektimeshowerComponent = (function () {
    function WeektimeshowerComponent(dateService, dragulaService) {
        this.dateService = dateService;
        this.dragulaService = dragulaService;
        this.weekdays = ["Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday", "Sunday"];
        dragulaService.setOptions('timerange-bag', { removeOnSpill: true });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Asset)
    ], WeektimeshowerComponent.prototype, "asset", void 0);
    WeektimeshowerComponent = __decorate([
        core_1.Component({
            selector: 'week-time-shower',
            templateUrl: 'app/pickers/week-time-shower.component.html',
            styleUrls: ['app/pickers/week-time-shower.css'],
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            providers: [index_1.DateService]
        }), 
        __metadata('design:paramtypes', [index_1.DateService, ng2_dragula_1.DragulaService])
    ], WeektimeshowerComponent);
    return WeektimeshowerComponent;
}());
exports.WeektimeshowerComponent = WeektimeshowerComponent;
//# sourceMappingURL=week-time-shower.component.js.map