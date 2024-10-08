import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map, startWith, share } from 'rxjs/operators';

@Injectable()
export class ClockService {

  private clock: Observable<Date>; 
  constructor() { 
    this.clock = interval(1000).pipe(
      startWith(0),
      map(() => new Date()),
      share()
    );
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
