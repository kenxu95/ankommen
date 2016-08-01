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
var WeekTimePickerComponent = (function () {
    function WeekTimePickerComponent(dateService) {
        this.dateService = dateService;
        this.submit = new core_1.EventEmitter();
        this.weekdays = ["Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday", "Sunday"];
        this.selectedWeekdays = Array(7); // Whether any day of the week was selected
        /* Time Picker Attributes*/
        this.hstep = 1;
        this.mstep = 15;
        this.ismeridian = false;
        // TODO: Backend also
        this.usedTimeRanges = [
            [],
            [{ start: new Date(), end: new Date() }],
            [],
            [{ start: new Date(), end: new Date() }],
            [],
            [],
            []];
    }
    WeekTimePickerComponent.prototype.ngOnInit = function () {
        this.startTime = new Date();
        this.endTime = new Date();
    };
    WeekTimePickerComponent.prototype.onSelect = function (weekIndex) {
        this.selectedWeekdays[weekIndex] = !this.selectedWeekdays[weekIndex];
    };
    WeekTimePickerComponent.prototype.onSelectUsedTimeRange = function (usedTimeRange) {
        this.selectedTimeRange = usedTimeRange;
        this.startTime = usedTimeRange.start;
        this.endTime = usedTimeRange.end;
    };
    WeekTimePickerComponent.prototype.canApplyTimeRange = function () {
        return !this.selectedWeekdays.some(function (_) { return _; });
    };
    WeekTimePickerComponent.prototype.applyTimeRange = function () {
        this.submit.emit([this.selectedWeekdays,
            { start: this.startTime, end: this.endTime }]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WeekTimePickerComponent.prototype, "submit", void 0);
    WeekTimePickerComponent = __decorate([
        core_1.Component({
            selector: 'week-time-picker',
            templateUrl: 'app/pickers/week-time-picker.component.html',
            styleUrls: ['app/pickers/week-time-picker.css'],
            directives: [ng2_bootstrap_1.TimepickerComponent, core_1.forwardRef(function () { return index_1.WeekTimeShowerComponent; })],
            providers: [index_2.DateService]
        }), 
        __metadata('design:paramtypes', [index_2.DateService])
    ], WeekTimePickerComponent);
    return WeekTimePickerComponent;
}());
exports.WeekTimePickerComponent = WeekTimePickerComponent;
//# sourceMappingURL=week-time-picker.component.js.map