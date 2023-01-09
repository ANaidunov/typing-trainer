import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";

export interface StatisticsState {
  time: number;
  wordsLength: number;
};

export const initialState: StatisticsState = {
  time: 0,
  wordsLength: 0,
};

export const featureSelector = createFeatureSelector<StatisticsState>('statistics');

export const wordsLengthSelector = createSelector(featureSelector, state => state.wordsLength);
