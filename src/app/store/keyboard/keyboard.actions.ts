import { KeyboardKey } from 'src/components/keyboard-monitor/keyboard-monitor.component';
import { createAction, props } from "@ngrx/store";

export const setKeyState = createAction('[KEYBOARD] set key state', props<{ pressedKey: KeyboardKey }>());
export const setTypedKeyState = createAction('[KEYBOARD] set typed key state', props<{ pressedKey: KeyboardKey }>());
