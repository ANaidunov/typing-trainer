import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addResult, startTimer, stopTimer } from './statistics.actions';
import { distinctUntilChanged, filter, map, tap, timeInterval, withLatestFrom } from 'rxjs/operators';
import { wordsLengthSelector, StatisticsState } from './statistics.state';
import { select, Store } from '@ngrx/store';

@Injectable()
export class StatisticsEffects {
  constructor(private actions$: Actions, private store: Store<StatisticsState>) {}

  updateTime$ = createEffect(() => this.actions$.pipe(
    ofType(startTimer, stopTimer),
    distinctUntilChanged(),
    timeInterval(),
    filter(x => x.value.type !== startTimer.type),
    map(interval => interval.interval / 60000),
    withLatestFrom(this.store.pipe(select(wordsLengthSelector))),
    tap(([time, length]) => {
      const speed = (length / time);
      this.store.dispatch(addResult({ result: { speed: speed, text: `Speed is ${speed.toFixed(2)} symbols/min` } }));
    })
  ), { dispatch: false });
}
