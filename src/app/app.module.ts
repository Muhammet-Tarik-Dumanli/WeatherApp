import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityCardComponent } from './city-card/city-card.component';
import { ClockComponent } from './clock/clock.component';
import { DateComponent } from './date/date.component'; 
import { ErrorComponent } from './error/error.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastItemComponent } from './forecast/forecast-item.component'; 
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AppService } from './shared/services/app.service';
import { LocalstorageService } from './shared/services/localstorage.service';
import { LoaderService } from './loader/loader.service';
import { WeatherService } from './weather/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HelperService } from './shared/services/helper.service';
import { WeatherIconsService } from './shared/services/weather-icons/weather-icons.service';
import { ClockService } from './clock/clock.service';
import { DateService } from './date/date.service';
import { ForecastService } from './forecast/forecast.service';
import { CityCardResolverService } from './city-card/city-card-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    ClockComponent,
    DateComponent,
    ErrorComponent,
    ForecastComponent,
    HeaderComponent,
    LoaderComponent,
    NotFoundComponent,
    SearchBarComponent,
    WeatherComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UiSwitchModule,
    HttpClientModule
  ],
  providers: [AppService, LocalstorageService, LoaderService, WeatherService, HelperService, WeatherIconsService, HttpClient, ClockService, DateService, ForecastService, CityCardResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
