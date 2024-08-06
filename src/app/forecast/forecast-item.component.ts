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

  getFormattedDate(): string {
    const date = new Date(this.date);
    // Gün ve ayı göstermek için formatlama (Örneğin, 'D MMM')
    const options: Intl.DateTimeFormatOptions = {weekday: 'long', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }
}
