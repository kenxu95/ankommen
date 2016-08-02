import { Component, Output, EventEmitter } from '@angular/core';
import { WeekTimePickerComponent } from './index';
import { Asset } from '../shared/index';

@Component({
  selector: 'new-assets-picker',
  templateUrl: 'app/pickers/new-assets-picker.component.html',
  styleUrls: ['app/pickers/styles.css'],
  directives: [WeekTimePickerComponent]
})

export class NewAssetsPickerComponent {
  @Output()
  submit = new EventEmitter();

  // TODO: Pull From Backend? Maybe only the asset names...
  // TODO: Do we need a temporary holding place for deselected assets?
  availableAssets: Asset[] = [new Asset(5, [[], [], [], [], [], [], []]), 
                              new Asset(6, [[], [], [], [], [], [], []]), 
                              new Asset(7, [[], [], [], [], [], [], []]), 
                              new Asset(9, [[], [], [], [], [], [], []])];
  selectedIndexes: number[] = []; // Assets currently displayed


  imageClick(clickedAsset: Asset){
    var assetIndex = this.availableAssets.indexOf(clickedAsset);
    var selectedIndex = this.selectedIndexes.indexOf(assetIndex);

    // If asset was deselected, move it out of selected assets 
    if (selectedIndex > -1){
      this.selectedIndexes.splice(selectedIndex, 1);
    }else{
      // Otherwise, the asset was selected so move it into selectedAssets
      this.selectedIndexes.push(assetIndex);
    }
  }

  isAssetSelected(myAsset: Asset){
    var assetIndex = this.availableAssets.indexOf(myAsset);
    var selectedIndex = this.selectedIndexes.indexOf(assetIndex);
    return selectedIndex > -1;
  }

  /* Applies the emitted time range to the selected assets*/
  applyTimeRangeToAssets(emittedArray: any){
    var selectedWeekdays = emittedArray[0];
    var timeRange = emittedArray[1];

    for (let assetIndex of this.selectedIndexes){
      for (var n = 0; n < selectedWeekdays.length; n++){
        if (selectedWeekdays[n]){
          this.availableAssets[assetIndex].availability[n].push(timeRange);
        }
      }
    }
  }

  /* Emits the chosen assets and remove them from available assets */
  createAssets(){
    var createdAssets = []
    for (let assetIndex of this.selectedIndexes.sort().reverse()){
      createdAssets.push(this.availableAssets[assetIndex]);
      this.availableAssets.splice(assetIndex, 1); /* Remove the assets from available assets */
    }
    this.submit.emit(createdAssets);

    this.selectedIndexes = [] /* Clear available array */
  }

}














