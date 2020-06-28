import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';

@Directive({ selector: '[show-remaining]' })
export class ShowRemainingDirective implements OnChanges {

  @Input('show-remaining')
  showRemaining

  @Input('remaining-count')
  remaining;

  constructor(private el: ElementRef<HTMLElement>, private appService: AppService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.showRemaining.currentValue !== changes.showRemaining.previousValue) {
      const r = this.appService.showRemaining(changes.showRemaining.currentValue,
        this.remaining);
      this.el.nativeElement.innerText = '' + r;
    }
  }
}
