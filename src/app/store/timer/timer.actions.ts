import { createAction } from "@ngrx/store";

export const startTimer = createAction('[TIMER] start timer');
export const stopTimer = createAction('[TIMER] stop timer');
export const setTime = createAction(`[TIMER] set timer's time`);

