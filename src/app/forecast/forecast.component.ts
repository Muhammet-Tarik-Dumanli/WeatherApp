import {
  Component,
  OnChanges,
  OnDestroy,
  Input,
} from '@angular/core';

import { ForecastService } from './forecast.service';
import { Forecast } from './forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent implements OnChanges, OnDestroy {
  @Input() cityName: string = '';
  @Input() measureOfTemp: string = '';

  private subscribers: any = {};
  firstWeekForecast: any; //Forecast[]
  secondWeekForecast: any; //Forecast[]
  isSecondWeekForecastListShow: boolean = false;
  forecastDays: number = 0;

  constructor(private forecastService: ForecastService) {}

  ngOnChanges(): void {
    if (this.subscribers.forecast) {
      this.subscribers.forecast.unsubscribe();
    }

    this.subscribers.forecast = this.forecastService
      .getForecastByCity(this.cityName)
      .subscribe((forecast) => {
        const forecastData = forecast.map((forecastByDay: any) =>
          this.forecastService.handleResponseForecastData(forecastByDay)
        );

        this.firstWeekForecast = forecastData.slice(0, 7);
        this.secondWeekForecast = forecastData.slice(7, 14);

        this.recalculateForecastDays();
      });
  }

  toggleSecondWeekForecastList(): void {
    this.isSecondWeekForecastListShow = !this.isSecondWeekForecastListShow;
    this.recalculateForecastDays();
  }

  private recalculateForecastDays(): void {
    const firstWeekForecastLength = this.firstWeekForecast.length;
    const secondWeekForecastLength = this.secondWeekForecast.length;

    this.forecastDays = !this.isSecondWeekForecastListShow
      ? firstWeekForecastLength
      : firstWeekForecastLength + secondWeekForecastLength;
  }

  ngOnDestroy(): void {
    this.subscribers.forecast.unsubscribe();
  }
}
