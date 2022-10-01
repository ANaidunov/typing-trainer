import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { startTimer, stopTimer } from './timer.actions';
import { distinctUntilChanged, filter, tap, timeInterval } from 'rxjs/operators';

@Injectable()
export class TimerEffects {
  constructor(private actions$: Actions) {}

  updateTime$ = createEffect(() => this.actions$.pipe(
    ofType(startTimer, stopTimer),
    distinctUntilChanged(),
    timeInterval(),
    filter(x => {
      return x.value.type !== startTimer.type;
    }),
    tap(({ interval }) => console.log(new Date(interval).toTimeString()))
  ), { dispatch: false });
}
