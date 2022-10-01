import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { keyboardReducer } from '../store/keyboard/keyboard.reducer';
import { KeyboardState } from '../store/keyboard/keyboard.state';
import { timerReducer } from '../store/timer/timer.reducer';
import { TimerState } from '../store/timer/timer.state';

export interface State {
  keyboard: KeyboardState;
  timer: TimerState;
};

export const reducers: ActionReducerMap<State> = {
  keyboard: keyboardReducer,
  timer: timerReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
