import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { weatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit { 
  city$;
  public cityData = [];
  constructor(private weatherService:weatherService) { 
    // this.city$ = this.weatherService.fetchCity();
  }

  ngOnInit(): void {
    this.weatherService.fetchCity().subscribe(data => this.cityData = data)
    console.log( this.weatherService.fetchCity())
  }
}


// export class WeatherComponent implements OnInit {
//   city: string;
//   private data: Array<any> = [];  
//   constructor(private actRoute: ActivatedRoute) {
//      this.city = this.actRoute.snapshot.params.city;
//     // https://www.metaweather.com/api/location/search/?query=karachi    
//   }
//   ngOnInit(): void {
//       }




