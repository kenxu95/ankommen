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
var ActiveTasksComponent = (function () {
    function ActiveTasksComponent(taskService, dragulaService) {
        this.taskService = taskService;
        this.dragulaService = dragulaService;
        // TODO: Replace this with real assets code when we can fetch asset images
        this.myAssets = [1, 2, 3, 4];
        this.otherAssets = [5, 6, 7];
        dragulaService.setOptions('assets-bag', {
            revertOnSpill: true
        });
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
        if (typeof jQuery != 'undefined') {
            alert(jQuery.fn.jquery);
        }
    };
    ActiveTasksComponent.prototype.imageClick = function () {
        console.log("Image clicked");
        console.log(this.myAssets);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ActiveTasksComponent.prototype, "mockUser", void 0);
    ActiveTasksComponent = __decorate([
        core_1.Component({
            selector: 'active-tasks',
            templateUrl: "app/dashboard/active-tasks.component.html",
            styleUrls: ["app/shared/styles/dragAssets.css"],
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            providers: [index_1.TaskService]
        }), 
        __metadata('design:paramtypes', [index_1.TaskService, ng2_dragula_1.DragulaService])
    ], ActiveTasksComponent);
    return ActiveTasksComponent;
}());
exports.ActiveTasksComponent = ActiveTasksComponent;
//# sourceMappingURL=active-tasks.component.js.map