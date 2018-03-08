import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { City } from './city';

@Injectable()
export class SearchService {
  private url = 'https://api.openweathermap.org/data/2.5/weather?';  // URL to web api
  private key = '&appid=1da79b4df48938b00274cda482134443'; //API Key

  constructor(private http: HttpClient) { }

  getCity(name: string) {
    const url = `${this.url}q=${name}${this.key}`;
    return this.http.get(url);
  }

  getBackground(city: City) {
    switch(city.weather) {
      case 'rain':
        return "https://images6.alphacoders.com/391/391347.jpg";
      case 'Clouds':
        return "https://tctechcrunch2011.files.wordpress.com/2015/08/clouds.jpg";
      case 'Thunderstorm':
        return "https://s.hswstatic.com/gif/thunderstorm-orig.jpg";
      case 'Drizzle':
        return "https://images6.alphacoders.com/391/391347.jpg";
      case 'Snow':
        return "https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg";
      case 'Clear':
        return "http://moziru.com/images/sky-clipart-clear-weather-15.jpg";
      case 'Extreme':
        return "https://static01.nyt.com/images/2017/12/15/climate/15cli-extremeweather-top/merlin_109107467_983c2205-5c2e-4a8f-ad73-a290f3b10d32-superJumbo.jpg";
      case 'Mist':
        return "https://vignette.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040";
    }
  }
}
