import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

declare var google: any;
declare var $: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  


  

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public platform: Platform) { }


  ngAfterViewInit() {
      this.updateLocation();
      this.resizeDivs();
      
  }



  resizeDivs(){

      $('#map').resize(() => {
          $('#directions').height($("#parent").height() - $("#map").height());
      });
      $(window).resize(() => {
          $('#directions').height($("#parent").height() - $("#map").height());
          $('#map').width($("#parent").width());
      });
  }



  biggerMap(){
    
    $("#directions").toggle(()=>{
      $("#directions").animate({height:500},200);
    },()=>{
      $("#directions").animate({height:250},200);
    });
  }


  updateLocation(){
      //first get inaccurate location quickly
      navigator.geolocation.getCurrentPosition((success)=> {
          this.loadMap(success.coords)
      },(err)=> {
          console.warn(err)
          let tmpSource = { latitude: 12.9336518, longitude: 77.6123075};
                   this.loadMap(tmpSource);
      });

      //then get more accurate location
      navigator.geolocation.getCurrentPosition((success)=> {
          this.loadMap(success.coords)
      },(err)=> {
          console.warn(err)
      },{
          enableHighAccuracy: true
      });
  }
  

  loadMap(location) {

    let lat = location.latitude;
    let long = location.longitude;

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
    let destination = new google.maps.LatLng(12.97963047027588, 77.59068298339844); //Vidhana Soudha destination


    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    //this.createMarker(latLng, this.map, "source");
    //this.createMarker(destination, this.map, "destination");


    this.getDirections(directionsService, directionsDisplay, latLng, destination)
  }




  // createMarker(pos, map, title){
  //   var marker = new google.maps.Marker({
  //     position: pos,
  //     map: map,
  //     title: title
  //   });
  // }




  getDirections(directionsService, directionsDisplay, source, destination) {

    
    directionsService.route({
      origin:source,
      destination: destination,
      travelMode: 'DRIVING'
    },(response, status)=> {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(this.map);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  
}
