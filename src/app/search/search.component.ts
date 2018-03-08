import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';
import { City } from './city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  city: City = {
    weather: 'null'
  };
  bg_image: string;

  constructor(private searchService: SearchService) { }

  getCity(name: string): void {
    this.searchService.getCity(name)
    //.subscribe(data => this.city = { data });
    .subscribe(data => this.city = {
      weather: data['weather'][0]['main'],
    });
    this.bg_image = this.searchService.getBackground(this.city);
    }
  }
