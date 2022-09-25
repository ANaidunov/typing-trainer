import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(value: string, textToHighlight: string, errorTypedCharPosition: number): string {
    if (!textToHighlight) return value;
    return errorTypedCharPosition < 0 ?
      value.replace(textToHighlight, '<span class="highlighted-text">$&</span>') :
      this.replaceAt(value, errorTypedCharPosition, `<span class="error-char">${value.charAt(errorTypedCharPosition)}</span>`)
        .replace(textToHighlight, '<span class="highlighted-text">$&</span>');
  }

  replaceAt = function (value: string, index: number, replacement: string) {
    return value.substring(0, index) + replacement + value.substring(index + 1, value.length);
  }
}
