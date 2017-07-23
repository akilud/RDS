import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Driver } from '../../models/driver';

@Injectable()
export class Drivers {
  drivers: Driver[] = [];

  defaultdriver: any = {
    "name": "S. BUEMI",
    "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304450/1988103100.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171340000000",
    "countryPic": "http://www.fiaformulae.com/img/flags/ch.svg",
    "team": "RENAULT E.DAMS",
    "points": "157",
  };


  constructor(public http: Http) {
    let drivers = [
    {
      "name": "S. BUEMI",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304450/1988103100.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171340000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/ch.svg",
      "team": "RENAULT E.DAMS",
      "points": "157",
    },
    {
      "name": "L. DI GRASSI",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304443/1984081100.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171310000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/br.svg",
      "team": "ABT SCHAEFFLER AUDI SPORT",
      "points": "147",
    }, {
      "name": "F. ROSENQVIST",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304451/1990015169.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171340000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/se.svg",
      "team": "MAHINDRA RACING",
      "points": "104",
    }, {
      "name": "S. BIRD",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304448/1987010900.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171330000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/br.svg",
      "team": "DS VIRGIN RACING",
      "points": "100",
    }, {
      "name": "N. PROST",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304439/1981081801.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171300000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/fr.svg",
      "team": "RENAULT E.DAMS",
      "points": "84",
    }, {
      "name": "N. HEIDFELD",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304438/1977051000.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171290000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/de.svg",
      "team": "MAHINDRA RACING",
      "points": "78",
    }, {
      "name": "J. VERGNE",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304454/1990042500.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171370000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/fr.svg",
      "team": "TECHEETAH",
      "points": "74",
    }, {
      "name": "J. LOPEZ",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304442/1983042600.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171310000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/ar.svg",
      "team": "DS VIRGIN RACING",
      "points": "50",
    }, {
      "name": "D. ABT",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304452/1990015408.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171340000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/de.svg",
      "team": "ABT SCHAEFFLER AUDI SPORTABT SCHAEFFLER AUDI SPORT",
      "points": "47",
    }, {
      "name": "N. PIQUET JR.",
      "profilePic": "http://d3iyn1f5w83nva.cloudfront.net/media/304444/1985072500.png?anchor=center&mode=crop&quality=80&width=170&height=170&rnd=131255171320000000",
      "countryPic": "http://www.fiaformulae.com/img/flags/br.svg",
      "team": "NEXTEV NIO",
      "points": "33",
    }
      
    ];

    for (let driver of drivers) {
      this.drivers.push(new Driver(driver));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.drivers;
    }

    return this.drivers.filter((driver) => {
      for (let key in params) {
        let field = driver[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return driver;
        } else if (field == params[key]) {
          return driver;
        }
      }
      return null;
    });
  }

  add(driver: Driver) {
    this.drivers.push(driver);
  }

  delete(driver: Driver) {
    this.drivers.splice(this.drivers.indexOf(driver), 1);
  }
}
