import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrl: './forecast-item.component.scss',
})
export class ForecastItemComponent {
  @Input() currentDay: boolean = true;
  @Input() date: number = 1;
  @Input() temperatureDay: number = 1;
  @Input() temperatureNight: number = 1;
  @Input() description: string = '';
  @Input() iconClassname: string = '';
  @Input() measureOfTemp: string = '';
}
