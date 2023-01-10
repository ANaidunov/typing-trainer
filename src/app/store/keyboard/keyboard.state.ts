import { createFeatureSelector, createSelector } from "@ngrx/store";
import { KeyboardKey, KeyboardRow } from "src/components/keyboard-monitor/keyboard-monitor.component";

export interface KeyboardState {
  nextKeyToType?: KeyboardKey;
  typedKey?: KeyboardKey;
  keyRows: KeyboardRow[];
  stringToType: string;
}

export const initialState: KeyboardState = {
  nextKeyToType: undefined,
  keyRows: [
    [
      { key: 'q', isHighlighted: false },
      { key: 'w', isHighlighted: false },
      { key: 'e', isHighlighted: false },
      { key: 'r', isHighlighted: false },
      { key: 't', isHighlighted: false },
      { key: 'y', isHighlighted: false },
      { key: 'u', isHighlighted: false },
      { key: 'i', isHighlighted: false },
      { key: 'o', isHighlighted: false },
      { key: 'p', isHighlighted: false },],
    [
      { key: 'a', isHighlighted: false },
      { key: 's', isHighlighted: false },
      { key: 'd', isHighlighted: false },
      { key: 'f', isHighlighted: false },
      { key: 'g', isHighlighted: false },
      { key: 'h', isHighlighted: false },
      { key: 'j', isHighlighted: false },
      { key: 'k', isHighlighted: false },
      { key: 'l', isHighlighted: false },],
    [
      { key: 'z', isHighlighted: false },
      { key: 'x', isHighlighted: false },
      { key: 'c', isHighlighted: false },
      { key: 'v', isHighlighted: false },
      { key: 'b', isHighlighted: false },
      { key: 'n', isHighlighted: false },
      { key: 'm', isHighlighted: false },],
    [
      { key: 'Space', isHighlighted: false }]
  ],
  stringToType: '',
};

export const featureSelector = createFeatureSelector<KeyboardState>('keyboard');

export const keyRowsSelector = createSelector(featureSelector, state => state.keyRows);
