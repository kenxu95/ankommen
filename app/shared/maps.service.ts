import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MapService {

  private geocodingUrl = "maps.googleapis.com/maps/api/geocode";

  constructor(private http: Http){}

  /* Obtain latitude and longitude from human-readable address */
  geocode(address: string){

    this.http.get(this.geocodingUrl, {

    })
        .map((res: Response) => res.json())
        .subscribe(res => console.log(res.data),
                   error => console.log("Error: " + error),
                   () => console.log("Finished"));
 }


}