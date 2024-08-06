import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, throwError } from 'rxjs';

import { AppService } from '../shared/services/app.service';
import { WeatherService } from '../weather/weather.service';
import { HelperService } from '../shared/services/helper.service';
import { WeatherIconsService } from '../shared/services/weather-icons/weather-icons.service';
import { Forecast } from './forecast';
import { switchMap, startWith, map, catchError } from 'rxjs/operators';

import { apiConfig } from '../config';

@Injectable()
export class ForecastService {
  private forecastUpdateInterval = apiConfig.updateInterval.forecast;
  private unitSystem: string = '';

  constructor(
    private http: HttpClient,
    private appService: AppService,
    private weatherService: WeatherService,
    private weatherIconService: WeatherIconsService,
    private helperService: HelperService
  ) {
    this.unitSystem = appService.getUnitSystem();
  }

  getForecastByCity(city: string): Observable<any> {
    return interval(this.forecastUpdateInterval).pipe(
      startWith(0),
      switchMap(() =>
        this.http.get<any>(`${apiConfig.host}/forecast/daily?q=${city}&appid=${apiConfig.appId}&units=${this.unitSystem}&cnt=${apiConfig.amountForecastDays}`)
      ),
      map(data => data.list), // JSON'a çevirme işlemi burada otomatik olarak yapılır
      catchError(error => throwError(() => new Error(error.message || 'Server error')))
    );
  }

  handleResponseForecastData(responseData: any): Forecast {
    const { dt, temp, weather } = responseData;
    const currentWeatherTimestamp =
      this.weatherService.getCurrentWeatherTimestamp();

    const currentDay = this.helperService.isItCurrentDayByTimestamps(
      dt,
      currentWeatherTimestamp
    );
    const date = dt * 1000;
    const iconClassname = this.weatherIconService.getIconClassNameByCode(
      weather[0].id
    );
    const temperatureDay = Math.round(temp.day);
    const temperatureNight = Math.round(temp.night);

    return new Forecast(
      currentDay,
      date,
      iconClassname,
      temperatureDay,
      temperatureNight,
      weather[0].description
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Error', error);
    return throwError(() => new Error(error.message || error));
  }
}
