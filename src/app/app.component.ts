/// <reference path="../../node_modules/@types/googlemaps/index.d.ts"/>

import { Component, NgModule } from '@angular/core';
import { bridges } from './bridges.data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bridges Tests';
  centerLat:number;
  centerLng:number;
  constructor(){
    let centerX:number =0;
    let centerY:number =0;

    bridges.forEach(b=>{
      centerX+=b.lat;
      centerY+=b.lng;
    });
    this.centerLat = centerX/bridges.length;
    this.centerLng = centerY/bridges.length;
  }
  MapInitialized(map: google.maps.Map){
    bridges.forEach(b=>{
        let opt: google.maps.MarkerOptions = <any>{};
        opt.position = {lat: b.lat, lng: b.lng};
        opt.draggable = false;
        let marker: google.maps.Marker = new google.maps.Marker(opt);
        marker.setMap(map);
    });
  }
}