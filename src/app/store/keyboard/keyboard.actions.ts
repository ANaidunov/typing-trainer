import { createAction, props } from "@ngrx/store";

export const setNextTypedKey = createAction('[KEYBOARD] set next key to type', props<{ pressedKey: string }>());
