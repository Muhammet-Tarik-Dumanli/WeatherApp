import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, EMPTY, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs';
import { WeatherService } from '../../weather/weather.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveLocationService implements Resolve<any> {

  constructor(private weatherService: WeatherService, private router: Router) { };

  resolve(): Observable<any> {
    return from(this.weatherService.getWeatherByCurrentLocation()).pipe(
      switchMap((city: string) => {
        this.router.navigate([`/${city}`]);
        return EMPTY;  // Navigation yaptıktan sonra boş bir Observable döndür
      }),
      catchError(error => {
        console.error(error);
        return EMPTY;  // Hata durumunda da boş bir Observable döndür
      })
    );
  }
}