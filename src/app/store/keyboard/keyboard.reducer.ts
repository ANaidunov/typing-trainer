import { createReducer, on } from "@ngrx/store";
import { setNextTypedKey } from "./keyboard.actions";
import { initialState, KeyboardState } from "./keyboard.state";

export const keyboardReducer = createReducer(initialState,
  on(setNextTypedKey, (state: KeyboardState, { pressedKey }) => {
    const nextPressedKeyName = pressedKey === ' ' ? 'Space' : pressedKey;
    const keyRows = state.keyRows.map(row => {
      const newRow = [...row];
      const pressedKeyIndex = newRow.findIndex(key => key.key === nextPressedKeyName);
      const pressedKeyOnKeyboard = newRow[pressedKeyIndex];

      if (pressedKeyOnKeyboard) {
        newRow[pressedKeyIndex] = { ...pressedKeyOnKeyboard, isHighlighted: true };
      }

      return pressedKeyOnKeyboard ? newRow : row;
    });

    const newState = {
      ...state,
      keyRows: [...keyRows]
    };

    return newState;
  }));
