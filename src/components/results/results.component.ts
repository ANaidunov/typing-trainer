import { Observable } from 'rxjs';
import { resultsSelector } from './../../app/store/statistics/statistics.state';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StatisticsState } from 'src/app/store/statistics/statistics.state';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {
  results$?: Observable<string[]>;

  constructor(private store: Store<StatisticsState>) {}

  ngOnInit(): void {
    this.results$ = this.store.pipe(select(resultsSelector));
  }
}
