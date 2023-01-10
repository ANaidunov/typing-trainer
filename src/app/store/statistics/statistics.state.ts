import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface StatisticsState {
  time: number;
  wordsLength: number;
  currentSymbolsCount: number;
  results: string[];
};

export const initialState: StatisticsState = {
  time: 0,
  wordsLength: 0,
  currentSymbolsCount: 0,
  results: [],
};

export const featureSelector = createFeatureSelector<StatisticsState>('statistics');

export const wordsLengthSelector = createSelector(featureSelector, state => state.wordsLength);
export const alreadyTypedSymbolsCountSelector = createSelector(featureSelector, state => state.currentSymbolsCount);
export const resultsSelector = createSelector(featureSelector, state => state.results);
