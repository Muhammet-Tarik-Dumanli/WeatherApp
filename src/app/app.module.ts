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
import { SharedComponent } from './shared/shared.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';

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
    SharedComponent,
    WeatherComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
