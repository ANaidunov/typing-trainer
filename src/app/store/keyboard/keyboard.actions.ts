import { createAction, props } from "@ngrx/store";
import { KeyboardKey } from "src/components/keyboard-monitor/keyboard-monitor.component";

export const setKeyState = createAction('[KEYBOARD] set key state', props<{ pressedKey: KeyboardKey }>());
