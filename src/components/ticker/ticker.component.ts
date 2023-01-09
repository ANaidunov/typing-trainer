import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import randomWords from 'random-words';
import { setKeyState, setTypedKeyState } from 'src/app/store/keyboard/keyboard.actions';
import { startTimer, stopTimer } from 'src/app/store/timer/timer.actions';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TickerComponent implements OnInit {
  wordsCount = 5;
  wordsToType = '';
  alreadyTypedString = '';
  errorCharPosition = -1;
  currentCursorPosition = 0;
  isTickerHighlighted = false;

  constructor(private store: Store) {}

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (this.currentCursorPosition >= this.wordsToType.length) {
      this.store.dispatch(stopTimer());
      this.initValues();
      this.highlightKey(this.wordsToType.charAt(this.currentCursorPosition));
    }
    if (this.wordsToType[this.currentCursorPosition] === event.key) {
      this.unHighlightKey(this.wordsToType.charAt(this.currentCursorPosition));
      this.currentCursorPosition++;
      this.alreadyTypedString = this.wordsToType.slice(0, this.currentCursorPosition);
      this.errorCharPosition = -1;
      this.highlightKey(this.wordsToType.charAt(this.currentCursorPosition));
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
    this.highlightKey(this.wordsToType.charAt(this.currentCursorPosition));
  }

  generateWords() {
    this.wordsToType = randomWords(this.wordsCount).join(' ');
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
