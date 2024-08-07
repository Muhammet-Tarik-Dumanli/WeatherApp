import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { WeatherService } from '../weather/weather.service';

@Injectable()
export class CityCardResolverService implements Resolve<any> {

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.weatherService.createResponseWeatherByCity(route.params['city'])
    .catch((error) => {
      if(error.status === 404) {
        this.router.navigate(['/service/search'], { queryParams: {city: route.params['city'] } });
      }
    });
  }
}
