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
var index_1 = require('./index');
var index_2 = require('../shared/index');
var DashboardComponent = (function () {
    function DashboardComponent(userService) {
        this.userService = userService;
        this.tabTitles = ["Active Tasks", "Potential Tasks", "Previous Tasks", "Profile"];
        this.currentTabIndex = 0;
    }
    DashboardComponent.prototype.getMockUser = function () {
        var _this = this;
        this.userService.getMockUser().then(function (mockUser) { return _this.mockUser = mockUser; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMockUser();
    };
    DashboardComponent.prototype.selectTab = function (tabIndex) {
        this.currentTabIndex = tabIndex;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            directives: [index_1.ActiveTasksComponent, index_1.PotentialTasksComponent,
                index_1.PreviousTasksComponent, index_1.ProfileComponent],
            providers: [index_2.UserService]
        }), 
        __metadata('design:paramtypes', [index_2.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map