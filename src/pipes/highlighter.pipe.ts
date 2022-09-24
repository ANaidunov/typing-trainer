import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(value: string, textToHighlight: string): string {
    if (!textToHighlight) return value;
    const re = new RegExp("\\b(" + textToHighlight + "\\b)", 'igm');
    return value.replace(re, '<span class="highlighted-text">$&</span>');
  }

}
