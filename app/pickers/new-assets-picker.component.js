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
var NewAssetsPickerComponent = (function () {
    function NewAssetsPickerComponent() {
        this.submit = new core_1.EventEmitter();
        // TODO: Pull From Backend? Maybe only the asset names...
        // TODO: Do we need a temporary holding place for deselected assets?
        this.availableAssets = [new index_2.Asset(5, [[], [], [], [], [], [], []]),
            new index_2.Asset(6, [[], [], [], [], [], [], []]),
            new index_2.Asset(7, [[], [], [], [], [], [], []]),
            new index_2.Asset(9, [[], [], [], [], [], [], []])];
        this.selectedIndexes = []; // Assets currently displayed
    }
    NewAssetsPickerComponent.prototype.imageClick = function (clickedAsset) {
        var assetIndex = this.availableAssets.indexOf(clickedAsset);
        var selectedIndex = this.selectedIndexes.indexOf(assetIndex);
        // If asset was deselected, move it out of selected assets 
        if (selectedIndex > -1) {
            this.selectedIndexes.splice(selectedIndex, 1);
        }
        else {
            // Otherwise, the asset was selected so move it into selectedAssets
            this.selectedIndexes.push(assetIndex);
        }
    };
    NewAssetsPickerComponent.prototype.isAssetSelected = function (myAsset) {
        var assetIndex = this.availableAssets.indexOf(myAsset);
        var selectedIndex = this.selectedIndexes.indexOf(assetIndex);
        return selectedIndex > -1;
    };
    /* Applies the emitted time range to the selected assets*/
    NewAssetsPickerComponent.prototype.applyTimeRangeToAssets = function (emittedArray) {
        var selectedWeekdays = emittedArray[0];
        var timeRange = emittedArray[1];
        for (var _i = 0, _a = this.selectedIndexes; _i < _a.length; _i++) {
            var assetIndex = _a[_i];
            for (var n = 0; n < selectedWeekdays.length; n++) {
                if (selectedWeekdays[n]) {
                    this.availableAssets[assetIndex].availability[n].push(timeRange);
                }
            }
        }
    };
    /* Emits the chosen assets and remove them from available assets */
    NewAssetsPickerComponent.prototype.createAssets = function () {
        var createdAssets = [];
        for (var _i = 0, _a = this.selectedIndexes.sort().reverse(); _i < _a.length; _i++) {
            var assetIndex = _a[_i];
            createdAssets.push(this.availableAssets[assetIndex]);
            this.availableAssets.splice(assetIndex, 1); /* Remove the assets from available assets */
        }
        this.submit.emit(createdAssets);
        this.selectedIndexes = []; /* Clear available array */
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewAssetsPickerComponent.prototype, "submit", void 0);
    NewAssetsPickerComponent = __decorate([
        core_1.Component({
            selector: 'new-assets-picker',
            templateUrl: 'app/pickers/new-assets-picker.component.html',
            styleUrls: ['app/pickers/styles.css'],
            directives: [index_1.WeekTimePickerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NewAssetsPickerComponent);
    return NewAssetsPickerComponent;
}());
exports.NewAssetsPickerComponent = NewAssetsPickerComponent;
//# sourceMappingURL=new-assets-picker.component.js.map