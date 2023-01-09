import { createReducer, props } from "@ngrx/store";
import { setTime } from "./timer.actions";
import { initialState } from "./timer.state";

export const timerReducer = createReducer(initialState)
  // on(setTime(props<{time: number}>())));
