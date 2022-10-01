import { createReducer } from "@ngrx/store";
import { initialState } from "./timer.state";

export const timerReducer = createReducer(initialState);
