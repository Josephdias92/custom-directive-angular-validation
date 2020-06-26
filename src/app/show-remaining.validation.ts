import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

@Directive({ selector: '[show-remaining]' })
export class ShowRemainingDirective implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.showRemaining.currentValue != changes.showRemaining.previousValue) {
      this.el.nativeElement.innerText = "" + Object.values(changes.showRemaining.currentValue).reduce((acc, val) => {
        acc = Number(acc) - Number(val);
        return acc;
      }, this.remaining);
    }
  }

  @Input('show-remaining')
  showRemaining;


  @Input('remaining-count')
  remaining;

  constructor(private el: ElementRef<HTMLElement>) { }
}
