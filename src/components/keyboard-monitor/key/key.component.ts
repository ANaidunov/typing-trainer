import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { KeyboardKey } from '../keyboard-monitor.component';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyComponent {

  @Input() key?: KeyboardKey;
}
