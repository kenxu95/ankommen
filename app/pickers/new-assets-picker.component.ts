import { Component, Input } from '@angular/core';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

import { Asset } from '../shared/index';

@Component({
  selector: 'new-assets-picker',
  templateUrl: 'app/dashboard/newAssetsPicker.component.html',
  directives: [Dragula],
  viewProviders: [DragulaService]
})

export class NewAssetsPickerComponent {
  @Input()
  mockUser: any;

  // Pull From Backend
  availableAssets: Asset[] = [new Asset(5, []), new Asset(6, []), new Asset(7, []), new Asset(9, [])];
  newAssets: Asset[] = [] 

  constructor(private dragulaService: DragulaService){
    dragulaService.setOptions('assets-bag', {revertOnSpill: true});
  } 

}

