import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-typing-progress-bar',
  templateUrl: './typing-progress-bar.component.html',
  styleUrls: ['./typing-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingProgressBarComponent implements OnChanges {
  @Input() allSymbolsToTypeCount: number | null = 0;
  @Input() alreadyTypedSymbolsCount: number | null = 0;
  progress = 0;

  constructor() {}

  ngOnChanges(): void {
    if (this.alreadyTypedSymbolsCount !== null && this.allSymbolsToTypeCount) {
      console.log(`typed ${this.alreadyTypedSymbolsCount} all ${this.allSymbolsToTypeCount}`);
      this.progress = (this.alreadyTypedSymbolsCount / this.allSymbolsToTypeCount) * 100;
    }
  };
}
