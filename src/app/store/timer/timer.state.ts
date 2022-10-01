import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";
import { TimeInterval } from "rxjs";

export interface TimerState {
  time: number;
};

export const initialState: TimerState = {
  time: 0,
};

export const featureSelector = createFeatureSelector<TimerState>('timer');

export const Selector = createSelector(featureSelector, state => state);
