import { statisticsReducer } from './../store/statistics/statistics.reducer';
import { StatisticsState } from './../store/statistics/statistics.state';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { keyboardReducer } from '../store/keyboard/keyboard.reducer';
import { KeyboardState } from '../store/keyboard/keyboard.state';

export interface State {
  keyboard: KeyboardState;
  statistics: StatisticsState;
}

export const reducers: ActionReducerMap<State> = {
  keyboard: keyboardReducer,
  statistics: statisticsReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
