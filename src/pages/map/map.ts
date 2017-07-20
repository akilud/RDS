import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  
  // @ViewChild('map') map;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public platform: Platform) { }


  ngAfterViewInit() {
      this.updateLocation();
      this.loadMap();
  }


  updateLocation(){
      navigator.geolocation.getCurrentPosition(function(success) {
          console.log(success)
      },function(err) {console.log(err)});
  }
  

  loadMap() {

      let latLng = new google.maps.LatLng(12.9290, 15);

      let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
}
