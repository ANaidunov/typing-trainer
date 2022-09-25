import { Component, Input, OnInit } from '@angular/core';
import { KeyboardKey } from '../keyboard-monitor.component';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  @Input() key?: KeyboardKey;

  constructor() {}

  ngOnInit(): void {
  }

}
