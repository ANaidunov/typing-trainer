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

export interface State {
  keyboard: KeyboardState;
};

export const reducers: ActionReducerMap<State> = {
  keyboard: keyboardReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
