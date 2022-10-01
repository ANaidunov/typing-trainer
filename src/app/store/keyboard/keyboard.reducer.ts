import { createReducer, on } from "@ngrx/store";
import { KeyboardRow } from "src/components/keyboard-monitor/keyboard-monitor.component";
import { setKeyState } from "./keyboard.actions";
import { initialState, KeyboardState } from "./keyboard.state";

export const keyboardReducer = createReducer(initialState,
  on(setKeyState, (state: KeyboardState, { pressedKey }) => {
    const keyToSet = pressedKey.key === ' ' ? { ...pressedKey, key: 'Space' } : pressedKey;

    let changedRow: KeyboardRow | undefined;
    const keyRowToChangeIndex = state.keyRows.findIndex(row => {
      const nextKeyIndex = row.findIndex(key => key.key === keyToSet.key);
      const nextKeyOnKeyboard = row[nextKeyIndex];

      if (nextKeyOnKeyboard) {
        changedRow = [...row];
        changedRow[nextKeyIndex] = keyToSet;
        return true;
      }

      return false;
    });

    const newState = {
      ...state,
    };

    if (keyRowToChangeIndex > -1 && changedRow) {
      const keyRows = [...state.keyRows];
      keyRows[keyRowToChangeIndex] = changedRow;
      newState.keyRows = keyRows;
    }

    return newState;
  }));
