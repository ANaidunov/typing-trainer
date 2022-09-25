import { Component, OnInit } from '@angular/core';

export type KeyboardKey = { key: string, isHighlighted: boolean };
export type KeyboardRow = KeyboardKey[];
@Component({
  selector: 'app-keyboard-monitor',
  templateUrl: './keyboard-monitor.component.html',
  styleUrls: ['./keyboard-monitor.component.scss']
})
export class KeyboardMonitorComponent implements OnInit {
  keyRows: KeyboardRow[];

  constructor() {
    this.keyRows = [
      [
        { key: 'q', isHighlighted: false },
        { key: 'w', isHighlighted: false },
        { key: 'e', isHighlighted: false },
        { key: 'r', isHighlighted: false },
        { key: 't', isHighlighted: false },
        { key: 'y', isHighlighted: false },
        { key: 'u', isHighlighted: false },
        { key: 'i', isHighlighted: false },
        { key: 'o', isHighlighted: false },],
      [
        { key: 'p', isHighlighted: false },
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
    ];
  }

  ngOnInit(): void {
  }

}
