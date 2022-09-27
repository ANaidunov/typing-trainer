import { createReducer, on } from "@ngrx/store";
import { KeyboardKey } from "src/components/keyboard-monitor/keyboard-monitor.component";
import { setNextTypedKey } from "./keyboard.actions";
import { initialState, KeyboardState } from "./keyboard.state";

export const keyboardReducer = createReducer(initialState,
  on(setNextTypedKey, (state: KeyboardState, { pressedKey }) => {
    const keyRows = state.keyRows.map(row => {
      const newRow = [...row];
      const pressedKeyIndex = row.findIndex(key => key.key === pressedKey);
      const pressedKeyOnKeyboard = newRow.find(key => key.key === pressedKey);

      if (pressedKeyOnKeyboard) {
        newRow[pressedKeyIndex] = { ...pressedKeyOnKeyboard, isHighlighted: true };
      }

      return pressedKeyOnKeyboard ? [...newRow] : row;
    });

    const newState = {
      ...state,
      keyRows: [...keyRows]
    };

    return newState;
  }));
