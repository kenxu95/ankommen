import { Component, Output, EventEmitter } from '@angular/core';
import { MapsService, Location } from '../shared/index';
import { NgForm }    from '@angular/forms';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component ({
  selector: 'location-picker',
  templateUrl: 'app/pickers/location-picker.component.html',
  styleUrls: ['app/pickers/location-picker.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [MapsService]
})

// TODO: If someone moves the center of the location, 
// we must perform reverse geo-coding

export class LocationPickerComponent {
  @Output()
  newLoc = new EventEmitter();

  private foundAddressesLimit: number = 10;

  address: string = "";
  foundAddresses: any[];

  chosenAddress: string;
  lat: number;
  lng: number;
  radius: number = 50;
  numSubmitted: number = 0;

  constructor (private mapsService: MapsService){}

  /* Search for the address to fill foundAddresses */
  searchClicked(){
    /* Clear the previous search */
    this.foundAddresses = [];

    /* Fill found addresses with results */
    this.mapsService.geocode(this.address)
    .subscribe(res => {
      let limit = Math.min(this.foundAddressesLimit, res.results.length); 
      for (var n = 0; n < limit; n++){
        this.foundAddresses.push(res.results[n]);
      }
    },
    error => console.log("Error: " + error),
    () => {});
  }   

  /* Display on the map */
  addressClicked(result: any){
    this.chosenAddress = result.formatted_address;
    this.lat = result.geometry.location.lat;
    this.lng = result.geometry.location.lng;
  }

  radiusChanged(newRadius: number){
    this.radius = Math.round((newRadius / 1000) * 10) / 10; // round to 1 decimal place
  }

  /* Submit the location */
  submitLocation() {
    var newLocation = new Location()
    newLocation.address = this.chosenAddress;
    newLocation.lat = this.lat;
    newLocation.lng = this.lng;
    newLocation.radius = this.radius;
    this.newLoc.emit(newLocation);
    this.numSubmitted ++;
  }
}