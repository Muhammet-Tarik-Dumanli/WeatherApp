import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockService } from './clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit, OnDestroy{
  private _clockSubscription: any; //Subscription
  time: any; //Date

  constructor(private clockService: ClockService) {} 

  ngOnInit(): void {
    this._clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}
