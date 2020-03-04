import { Directive, HostBinding, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective{

  colors = ['red', 'blue', 'green', 'yellow', 'orange', 'indigo']

  @HostBinding('style.color') textColor;
  @HostBinding('style.border-color') border;

  constructor(private elem: ElementRef) {
    console.log(this.elem);
  }

  @HostListener('keydown') triggerRainbow() {

    // console.log('fired');
    const newIndex = Math.floor(Math.random() * this.colors.length);

    const newColor = this.colors[newIndex];

    this.textColor = this.border = newColor;

  }


 
}
