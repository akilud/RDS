import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  teams: any[];

  constructor(public navCtrl: NavController) {
    this.teams = [
      {
        "name": "RENAULT E.DAMS",
        "profilePic": "http://www.fiaformulae.com/img/flags/fr.svg",
        "points": "259",
        "car": "https://www.motorsportweek.com/ckfinder/userfiles/images/FormulaE/renault_formula_e_studio-f3-4-2.jpg"
      },
      {
        "name": "ABT SCHAEFFLER AUDI SPORT  ",
        "profilePic": "http://www.fiaformulae.com/img/flags/de.svg",
        "points": "194",
        "car": "http://current-e.com/wp-content/uploads/2016/09/ABT-Schaeffler-Audi-Sport-Formula-E-factory-announcement-2016-front-profile.jpg"
      }, {
        "name": "MAHINDRA RACING",
        "profilePic": "http://www.fiaformulae.com/img/flags/in.svg",
        "points": "182",
        "car": "http://www.mahindra.com/resources/images/press-release/Mahindra-Racing-invites-fans-to-design-racetrack-for-the-India-ePrix-Original.jpg"
      }, {
        "name": "DS VIRGIN RACING",
        "profilePic": "http://www.fiaformulae.com/img/flags/gb.svg",
        "points": "153",
        "car":"https://www.ds-virginracing.com/wp-content/uploads/2015/10/DS-VR-Wallpaper2-1000x750.jpg"
      }
      // , {
      //   "name": "TECHEETAH",
      //   "profilePic": "http://www.fiaformulae.com/img/flags/jp.svg",
      //   "points": "94"
      // }, {
      //   "name": "NEXTEV NIO",
      //   "profilePic": "http://www.fiaformulae.com/img/flags/jp.svg",
      //   "points": "59"
      // }, {
      //   "name": "ANDRETTI FORMULA E",
      //   "profilePic": "http://www.fiaformulae.com/img/flags/us.svg",
      //   "points": "30"
      // }, {
      //   "name": "FARADAY FUTURE DRAGON RACING",
      //   "profilePic": "http://www.fiaformulae.com/img/flags/us.svg",
      //   "points": "30"
      // }, {
      //   "name": "VENTURI FORMULA E",
      //   "profilePic": "http://www.fiaformulae.com/img/flags/mc.svg",
      //   "points": "28"
      // },
      // {
      //   "name": "PANASONIC JAGUAR RACING",
      //   "profilePic": "http://www.fiaformulae.com/img/flags/gb.svg",
      //   "points": "21"
      // }
    ];
  }
}
