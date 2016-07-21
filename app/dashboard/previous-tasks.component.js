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
var PreviousTasksComponent = (function () {
    function PreviousTasksComponent(taskService) {
        this.taskService = taskService;
    }
    PreviousTasksComponent.prototype.getSelectedTasks = function () {
        var _this = this;
        this.taskService
            .getSelectedTasksPrevious(this.mockUser.myTasks)
            .then(function (tasks) { return _this.myPreviousTasks = tasks; })
            .catch(function (error) { return _this.error = error; });
        this.taskService
            .getSelectedTasksPrevious(this.mockUser.participatingTasks)
            .then(function (tasks) { return _this.previousParticipatingTasks = tasks; })
            .catch(function (error) { return _this.error = error; });
    };
    PreviousTasksComponent.prototype.ngOnChanges = function () {
        if (this.mockUser)
            this.getSelectedTasks();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PreviousTasksComponent.prototype, "mockUser", void 0);
    PreviousTasksComponent = __decorate([
        core_1.Component({
            selector: 'previous-tasks',
            templateUrl: 'app/dashboard/previous-tasks.component.html',
            providers: [index_1.TaskService]
        }), 
        __metadata('design:paramtypes', [index_1.TaskService])
    ], PreviousTasksComponent);
    return PreviousTasksComponent;
}());
exports.PreviousTasksComponent = PreviousTasksComponent;
//# sourceMappingURL=previous-tasks.component.js.map