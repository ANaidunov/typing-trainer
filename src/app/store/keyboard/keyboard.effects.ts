import { setTypedKeyState, setKeyState } from 'src/app/store/keyboard/keyboard.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class KeyboardEffects {
  constructor(private actions$: Actions) {}

  pushHighlightKeyButtonOn$ = createEffect(() => this.actions$.pipe(
    ofType(setTypedKeyState),
    map(setTypedKeyAction =>
      setKeyState({ pressedKey: { ...setTypedKeyAction.pressedKey, isTyped: true } }),
    ),
  ));

  pushHighlightKeyButtonOff$ = createEffect(() => this.actions$.pipe(
    ofType(setTypedKeyState),
    delay(200),
    map(setTypedKeyAction =>
      setKeyState({ pressedKey: { ...setTypedKeyAction.pressedKey, isTyped: false } }),
    ),
  ));
}
