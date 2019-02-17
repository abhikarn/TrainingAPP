import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @Input() conditionForChange = true;
  @Input() conditionForFocus = true;
  constructor(private el: ElementRef) { }

  @HostListener('change', ['$event'])
  onchange(event) {
    if (this.conditionForChange) {
      alert(event.target.value);
    }
  }

  @HostListener('focus', ['$event'])
  onFocus(event) {
    if (this.conditionForFocus) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
