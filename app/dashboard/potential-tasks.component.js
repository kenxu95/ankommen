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
var PotentialTasksComponent = (function () {
    function PotentialTasksComponent(taskService) {
        this.taskService = taskService;
    }
    PotentialTasksComponent.prototype.getSelectedTasks = function () {
        var _this = this;
        this.taskService
            .getSelectedTasks(this.mockUser.specificallyRequest)
            .then(function (tasks) { return _this.specificallyRequestedTasks = tasks; })
            .catch(function (error) { return _this.error = error; });
        this.searchForTasks();
    };
    PotentialTasksComponent.prototype.searchForTasks = function (assets) {
        var _this = this;
        if (assets === void 0) { assets = this.mockUser.assets; }
        var accountedTasks = this.mockUser.myTasks
            .concat(this.mockUser.participatingTasks
            .concat(this.mockUser.specificallyRequest));
        this.taskService
            .getPotentialTasks(assets, accountedTasks)
            .then(function (tasks) { return _this.potentialTasks = tasks; })
            .catch(function (error) { return _this.error = error; });
    };
    PotentialTasksComponent.prototype.ngOnChanges = function () {
        if (this.mockUser) {
            this.getSelectedTasks();
            this.assetsSearch = this.mockUser.assets;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PotentialTasksComponent.prototype, "mockUser", void 0);
    PotentialTasksComponent = __decorate([
        core_1.Component({
            selector: 'potential-tasks',
            templateUrl: 'app/dashboard/potential-tasks.component.html',
            providers: [index_1.TaskService]
        }), 
        __metadata('design:paramtypes', [index_1.TaskService])
    ], PotentialTasksComponent);
    return PotentialTasksComponent;
}());
exports.PotentialTasksComponent = PotentialTasksComponent;
//# sourceMappingURL=potential-tasks.component.js.map