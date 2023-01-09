import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import randomWords from 'random-words';
import { setKeyState, setTypedKeyState } from 'src/app/store/keyboard/keyboard.actions';
import { setStringLength, startTimer, stopTimer } from 'src/app/store/statistics/statistics.actions';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickerComponent implements OnInit {
  wordsCount = 5;
  stringToType = '';
  alreadyTypedString = '';
  errorCharPosition = -1;
  currentCursorPosition = 0;
  isTickerHighlighted = false;

  constructor(private store: Store) {}

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (this.currentCursorPosition >= this.stringToType.length) {
      this.store.dispatch(stopTimer());
      this.initValues();
      this.highlightKey(this.stringToType.charAt(this.currentCursorPosition));
    }
    if (this.stringToType[this.currentCursorPosition] === event.key) {
      this.unHighlightKey(this.stringToType.charAt(this.currentCursorPosition));
      this.currentCursorPosition++;
      this.alreadyTypedString = this.stringToType.slice(0, this.currentCursorPosition);
      this.errorCharPosition = -1;
      this.highlightKey(this.stringToType.charAt(this.currentCursorPosition));
      this.pushKeyButton(event.key);
    }
    else {
      this.pushKeyButton(event.key);
      this.errorCharPosition = this.currentCursorPosition;
    }

    event.stopPropagation();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.generateWords();
    this.highlightKey(this.stringToType.charAt(this.currentCursorPosition));
  }

  generateWords() {
    const wordsToType = randomWords(this.wordsCount);
    this.stringToType = wordsToType.join(' ');
    this.store.dispatch(setStringLength({ length: wordsToType.join('').length }));
    this.store.dispatch(startTimer());
  }

  highlightKey(key: string) {
    this.store.dispatch(setKeyState({ pressedKey: { key, isHighlighted: true } }));
  }

  unHighlightKey(key: string) {
    this.store.dispatch(setKeyState({ pressedKey: { key, isHighlighted: false } }));
  }

  pushKeyButton(key: string) {
    this.store.dispatch(setTypedKeyState({ pressedKey: { key: key } }));
  }

  private initValues() {
    this.generateWords();
    this.alreadyTypedString = '';
    this.errorCharPosition = -1;
    this.currentCursorPosition = 0;

    this.isTickerHighlighted = !this.isTickerHighlighted;
  }
}
