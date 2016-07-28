import { Component, Input } from '@angular/core'
import { Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import { WeektimeshowerComponent, WeektimepickerComponent } from '../pickers/index';

import { Asset } from '../shared/index'; 
 
@Component({
  selector: 'profile',
  templateUrl: "app/dashboard/profile.component.html",
  styleUrls: ["app/dashboard/styles.css"],
  directives: [Dragula, WeektimeshowerComponent, WeektimepickerComponent],
  viewProviders: [DragulaService]
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

  myAssets: Asset[] = [this.asset1, this.asset2, this.asset3];
  selectedAsset: Asset;


  constructor(private dragulaService: DragulaService){
   dragulaService.setOptions('assets-bag', {revertOnSpill: true});
  } 
   
  imageClick(selectedAsset: Asset, event: any){
    event.stopPropagation();
    this.selectedAsset = selectedAsset;
  } 

}










