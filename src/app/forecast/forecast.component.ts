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
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnChanges, OnDestroy {
  @Input() cityName: string = '';
  @Input() measureOfTemp: string = '';

  private subscribers: any = {};
  firstWeekForecast: Forecast[] = [];
  secondWeekForecast: Forecast[] = []; // Burada tipi açıkça belirtiyoruz
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
        const forecastData: Forecast[] = forecast.map((forecastByDay: any) =>
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
    this.forecastDays = this.firstWeekForecast.length + 
                         (this.isSecondWeekForecastListShow ? this.secondWeekForecast.length : 0);
  }

  ngOnDestroy(): void {
    if (this.subscribers.forecast) {
      this.subscribers.forecast.unsubscribe();
    }
  }
}
