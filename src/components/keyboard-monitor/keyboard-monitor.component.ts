import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KeyboardState, keyRowsSelector } from 'src/app/store/keyboard/keyboard.state';

export type KeyboardKey = { key: string, isHighlighted?: boolean, isTyped?: boolean };
export type KeyboardRow = KeyboardKey[];
@Component({
  selector: 'app-keyboard-monitor',
  templateUrl: './keyboard-monitor.component.html',
  styleUrls: ['./keyboard-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardMonitorComponent {
  public keyRows$: Observable<KeyboardRow[]>;

  constructor(private store: Store<KeyboardState>) {
    this.keyRows$ = this.store.select(keyRowsSelector);
  }
}
