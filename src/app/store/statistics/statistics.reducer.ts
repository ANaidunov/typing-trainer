import { createReducer, on, props } from "@ngrx/store";
import { setStringLength } from "./statistics.actions";
import { initialState } from "./statistics.state";

export const statisticsReducer = createReducer(initialState,
  on(setStringLength, (state, { length }) => {
    const newState = { ...state };
    newState.wordsLength = length;
    return newState;
  }));
