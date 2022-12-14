import { createReducer, on } from "@ngrx/store";
import { addResult, incrementCurrentSymbolsCount, resetCurrentSymbolsCount, setStringLength } from "./statistics.actions";
import { initialState } from "./statistics.state";

export const statisticsReducer = createReducer(initialState,
  on(setStringLength, (state, { length }) => ({ ...state, wordsLength: length })),
  on(resetCurrentSymbolsCount, (state) => ({ ...state, currentSymbolsCount: 0 })),
  on(incrementCurrentSymbolsCount, state => ({ ...state, currentSymbolsCount: state.currentSymbolsCount + 1 })),
  on(addResult, (state, { result }) => ({ ...state, results: [...state.results, result] })),
);
