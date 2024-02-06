import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeadline]'
})
export class HeadlineDirective {
  private _fontWeight: 'normal' | 'bold' | 'bolder' = 'normal';

  @Input()
  get fontWeight() {
    return this._fontWeight;
  }

  set fontWeight(newWeight: 'normal' | 'bold' | 'bolder') {
    this._fontWeight = newWeight;
    this.applyStyles();
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    this.applyStyles();
  }

  private applyStyles() {
    this.render.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
    this.render.setStyle(this.elementRef.nativeElement, 'font-weight', this.fontWeight);
  }
}
