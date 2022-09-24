import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import randomWords from 'random-words';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {
  wordsCount = 5;
  wordsToType: string = '';
  alreadyTypedString = '';
  currentCursorPosition = 0;

  constructor() {}

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (this.currentCursorPosition >= this.wordsToType.length) {
      this.generateWords();
      this.alreadyTypedString = '';
      this.currentCursorPosition = 0;
    }
    if (this.wordsToType[this.currentCursorPosition] === event.key) {
      this.currentCursorPosition++;
      this.alreadyTypedString = this.wordsToType.slice(0, this.currentCursorPosition);

    }
  }

  ngOnInit(): void {
    this.generateWords();
  }

  generateWords() {
    this.wordsToType = randomWords(this.wordsCount).join(' ');
  }
}
