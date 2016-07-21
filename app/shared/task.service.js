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
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.dashboardUrl = 'app/tasks';
    }
    // TODO: RANK BY RELEVANCEJ
    TaskService.prototype.getPotentialTasks = function (assets, accountedTasks) {
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(function (response) { return response.json().data
            .filter(function (t) {
            if (accountedTasks.indexOf(t.id) < 0 &&
                new Date(t.endTime) > new Date()) {
                for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
                    var asset = assets_1[_i];
                    if (t.assets.indexOf(asset) >= 0)
                        return true;
                }
            }
            return false;
        }); })
            .catch(this.handleError);
    };
    TaskService.prototype.getSelectedTasks = function (selectedTasks) {
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(function (response) { return response.json().data
            .filter(function (t) {
            return (selectedTasks.indexOf(t.id) >= 0);
        }); })
            .catch(this.handleError);
    };
    TaskService.prototype.getSelectedTasksPrevious = function (selectedTasks) {
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(function (response) { return response.json().data
            .filter(function (t) {
            return (selectedTasks.indexOf(t.id) >= 0)
                && (new Date(t.endTime) < new Date());
        }); })
            .catch(this.handleError);
    };
    TaskService.prototype.getSelectedTasksFuture = function (selectedTasks) {
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(function (response) { return response.json().data
            .filter(function (t) {
            return (selectedTasks.indexOf(t.id) >= 0)
                && (new Date(t.endTime) > new Date());
        }); })
            .catch(this.handleError);
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map