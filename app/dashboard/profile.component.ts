import { Component, Input } from '@angular/core'
import { Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import { WeekTimeShowerComponent, 
         WeekTimePickerComponent, 
         NewAssetsPickerComponent,
         LocationPickerComponent } from '../pickers/index';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';

import { Asset, Location } from '../shared/index'; 

 
@Component({
  selector: 'profile',
  templateUrl: "app/dashboard/profile.component.html",
  styleUrls: ["app/dashboard/styles.css", "app/shared/dragula.css"],
  directives: [Dragula, 
              WeekTimeShowerComponent, 
              WeekTimePickerComponent,
              NewAssetsPickerComponent,
              LocationPickerComponent,
              MODAL_DIRECTIVES],
  viewProviders: [DragulaService, BS_VIEW_PROVIDERS]
})

export class ProfileComponent {
  @Input()
  mockUser: any;

  // TODO: Replace this with real assets code when we can fetch asset images
  date1: Date = new Date();
  date2: Date = new Date(this.date1.getFullYear(), 
                        this.date1.getMonth(),
                        this.date1.getDay(),
                        this.date1.getHours() + 2, 
                        this.date1.getMinutes());
 
  date3: Date = new Date(this.date1.getFullYear(), 
                        this.date1.getMonth(),
                        this.date1.getDay(),
                        this.date1.getHours() + 3, 
                        this.date1.getMinutes());

  asset1 : Asset = new Asset(1, [
      [ {start: this.date1, end: this.date2}, {start: this.date2, end: this.date3}],
      [],
      [],
      [],
      [],
      [],
      []
      ]);

  asset2 : Asset = new Asset(2, [
      [],
      [],
      [ {start: this.date1, end: this.date3}, {start: this.date1, end: this.date2}],
      [],
      [ {start: this.date1, end: this.date2}, {start: this.date2, end: this.date3}],
      [],
      []
      ]);

  asset3 : Asset = new Asset(3, [
      [],
      [],
      [ {start: this.date1, end: this.date3}, {start: this.date1, end: this.date2}],
      [ {start: this.date1, end: this.date3}, {start: this.date1, end: this.date2}],
      [ {start: this.date1, end: this.date2}, {start: this.date2, end: this.date3}],
      [],
      []
      ]);

  /* ASSETS VARIABLES */
  myAssets: Asset[] = [this.asset1, this.asset2, this.asset3];
  selectedAsset: Asset;
  newAssetsShow: boolean = false;

  /* LOCATIONS VARIABLES */
  myLocations: Location[] = [];
  newLocationsShow: boolean = false;

  constructor(private dragulaService: DragulaService){
   dragulaService.setOptions('assets-bag', {revertOnSpill: true});
   dragulaService.setOptions('locations-bag', {removeOnSpill: true});
  } 
   
  imageClick(selectedAsset: Asset, event: any){
    event.stopPropagation();
    this.selectedAsset = selectedAsset;
  } 

  newAssetsClicked(){
    event.stopPropagation();
    this.newAssetsShow = true;
  } 

  closeNewAssetsClicked(){
    event.stopPropagation();
    this.newAssetsShow = false;
  }

  /* Recieves emitted timepicker */
  addTimeRangeToAsset(emittedArray: any){
    var selectedWeekdays = emittedArray[0];
    var timeRange = emittedArray[1];
    for(var n = 0; n < selectedWeekdays.length; n++){
      if (selectedWeekdays[n]) 
        this.selectedAsset.availability[n].push(timeRange);
    }
  }

  /* Recies emitted new-assets-picker */
  addAssets(newAssets: any){
    for (let newAsset of newAssets){
      this.myAssets.push(newAsset);
    }
  }

  /* LOCATION PICKER */
  newLocationsClicked() {
    event.stopPropagation();
    this.newLocationsShow = true;
  }

  closeNewLocationsClicked() {
    event.stopPropagation();
    this.newLocationsShow = false;
  }

  addLocation(newLocation: Location){
    this.myLocations.push(newLocation);
  }


}










