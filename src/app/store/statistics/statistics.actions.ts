import { createAction, props } from "@ngrx/store";

export const startTimer = createAction('[STATISTICS] start timer');
export const stopTimer = createAction('[STATISTICS] stop timer');
export const setTime = createAction(`[STATISTICS] set timer's time`);
export const setStringLength = createAction(`STATISTICS set string to type length`, props<{ length: number }>());
export const resetCurrentSymbolsCount = createAction(`STATISTICS reset typed symbols count`);
export const incrementCurrentSymbolsCount = createAction(`STATISTICS increment typed symbols count`);

