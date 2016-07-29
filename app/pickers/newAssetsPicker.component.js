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
var index_1 = require('../shared/index');
var NewAssetsPickerComponent = (function () {
    function NewAssetsPickerComponent(dragulaService) {
        this.dragulaService = dragulaService;
        // Pull From Backend
        this.availableAssets = [new index_1.Asset(5, []), new index_1.Asset(6, []), new index_1.Asset(7, []), new index_1.Asset(9, [])];
        this.newAssets = [];
        dragulaService.setOptions('assets-bag', { revertOnSpill: true });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewAssetsPickerComponent.prototype, "mockUser", void 0);
    NewAssetsPickerComponent = __decorate([
        core_1.Component({
            selector: 'new-assets-picker',
            templateUrl: 'app/dashboard/newAssetsPicker.component.html',
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], NewAssetsPickerComponent);
    return NewAssetsPickerComponent;
}());
exports.NewAssetsPickerComponent = NewAssetsPickerComponent;
//# sourceMappingURL=newAssetsPicker.component.js.map