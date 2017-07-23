import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CardsPage } from '../cards/cards';
import { DriversPage } from '../drivers/drivers';
import { MapPage } from '../map/map';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) { }

  viewTeams() {
    this.navCtrl.push(CardsPage);
  }

  viewDrivers() {
    this.navCtrl.push(DriversPage);
  }

  getDirections(){
	  this.navCtrl.push(MapPage);
  }
}
