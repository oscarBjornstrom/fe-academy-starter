import {
  Directive,
  HostBinding,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[feAcademyHighlightEven]'
})
export class HighlightEvenDirective implements OnInit {
  @Input('feAcademyHighlightEven') index: number;

  @HostBinding('style.backgroundColor') bg;

  ngOnInit() {
    if (this.index % 2 === 0) {
      this.bg = 'lightblue';
    }
  }
}
