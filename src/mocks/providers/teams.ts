import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Team } from '../../models/team';

@Injectable()
export class Teams {
  teams: Team[] = [];

  defaultteam: any = {
    "name": "RENAULT E.DAMS",
    "profilePic": "http://www.fiaformulae.com/img/flags/fr.svg",
    "points": "259"
  };


  constructor(public http: Http) {
    let teams = [
      {
        "name": "RENAULT E.DAMS",
        "profilePic": "http://www.fiaformulae.com/img/flags/fr.svg",
        "points": "259"
      },
      {
      "name": "ABT SCHAEFFLER AUDI SPORT  ",
        "profilePic": "http://www.fiaformulae.com/img/flags/de.svg",
        "points": "194"
      }, {
      "name": "MAHINDRA RACING",
        "profilePic": "http://www.fiaformulae.com/img/flags/in.svg",
        "points": "182"
    }, {
      "name": "DS VIRGIN RACING",
      "profilePic": "http://www.fiaformulae.com/img/flags/gb.svg",
      "points": "153"
    }, {
      "name": "TECHEETAH",
      "profilePic": "http://www.fiaformulae.com/img/flags/jp.svg",
      "points": "94"
    }, {
      "name": "NEXTEV NIO",
      "profilePic": "http://www.fiaformulae.com/img/flags/jp.svg",
      "points": "59"
    }, {
      "name": "ANDRETTI FORMULA E",
      "profilePic": "http://www.fiaformulae.com/img/flags/us.svg",
      "points": "30"
    }, {
      "name": "FARADAY FUTURE DRAGON RACING",
      "profilePic": "http://www.fiaformulae.com/img/flags/us.svg",
      "points": "30"
    }, {
      "name": "VENTURI FORMULA E",
      "profilePic": "http://www.fiaformulae.com/img/flags/mc.svg",
      "points": "28"
    },
    {
    "name": "PANASONIC JAGUAR RACING",
    "profilePic": "http://www.fiaformulae.com/img/flags/gb.svg",
    "points": "21"
  }
   ];

    for (let team of teams) {
      this.teams.push(new Team(team));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.teams;
    }

    return this.teams.filter((team) => {
      for (let key in params) {
        let field = team[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return team;
        } else if (field == params[key]) {
          return team;
        }
      }
      return null;
    });
  }

  add(team: Team) {
    this.teams.push(team);
  }

  delete(team: Team) {
    this.teams.splice(this.teams.indexOf(team), 1);
  }
}
