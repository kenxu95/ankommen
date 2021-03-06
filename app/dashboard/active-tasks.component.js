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
var ActiveTasksComponent = (function () {
    function ActiveTasksComponent(taskService) {
        this.taskService = taskService;
    }
    // FILTER BY ACTIVE TASKS TODO: ADD MY TASKS TOO
    ActiveTasksComponent.prototype.getSelectedTasks = function () {
        var _this = this;
        this.taskService
            .getSelectedTasksFuture(this.mockUser.myTasks)
            .then(function (tasks) { return _this.myTasks = tasks; })
            .catch(function (error) { return _this.error = error; });
        this.taskService
            .getSelectedTasksFuture(this.mockUser.participatingTasks)
            .then(function (tasks) { return _this.participatingTasks = tasks; })
            .catch(function (error) { return _this.error = error; });
    };
    ActiveTasksComponent.prototype.ngOnChanges = function () {
        if (this.mockUser)
            this.getSelectedTasks();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ActiveTasksComponent.prototype, "mockUser", void 0);
    ActiveTasksComponent = __decorate([
        core_1.Component({
            selector: 'active-tasks',
            templateUrl: "app/dashboard/active-tasks.component.html",
            providers: [index_1.TaskService]
        }), 
        __metadata('design:paramtypes', [index_1.TaskService])
    ], ActiveTasksComponent);
    return ActiveTasksComponent;
}());
exports.ActiveTasksComponent = ActiveTasksComponent;
//# sourceMappingURL=active-tasks.component.js.map