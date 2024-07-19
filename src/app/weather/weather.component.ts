import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from '../shared/services/app.service';
import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit, OnDestroy{
  private _weatherSubscription: Subscription | undefined;
  weather: any; //Weather | undefined;
  unitSystem: any; //string

  constructor(private appService: AppService,
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    this.unitSystem = appService.getUnitSystem();
  }

  ngOnInit(): void {
   this.route.data.subscribe(
    (data: { weather?: Weather}) => {
      this.weather = data.weather;
    }
   );
   
   this._weatherSubscription = this.weatherService.getWeather().subscribe(weather => {
    this.weather = weather;
   });
  }

  ngOnDestroy(): void {
    this._weatherSubscription?.unsubscribe();
  }
}
