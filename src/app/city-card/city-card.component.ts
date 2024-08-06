import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../weather/weather';
import { apiConfig } from '../config';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'] // styleUrls, styleUrl değil
})
export class CityCardComponent implements OnInit {
  @Input() weather: any = {}; // Varsayılan boş bir nesne
  @Input() unitSystem: 'metric' | 'imperial' = 'metric';

  measureOfTemp: string = '';
  measureOfWindSpeed: string = '';
  measureOfPressure: string = '';

  ngOnInit() {
    const measurementUnits = apiConfig.measurementUnits[this.unitSystem];

    this.measureOfTemp = measurementUnits.temperature;
    this.measureOfWindSpeed = measurementUnits.windSpeed;
    this.measureOfPressure = measurementUnits.pressure;
  }
}
