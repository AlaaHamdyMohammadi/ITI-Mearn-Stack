import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgStyle]'
})
export class ImgStyleDirective {
  @Input() style1: string = '30px';
  @Input() style2: string = '10px';
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.borderRadius = '25px';
  }
  @HostListener('mouseover') onOverfunc () {
    // this.element.nativeElement.style.borderRadius = '60px';
    this.element.nativeElement.style.borderRadius = this.style1;
    this.element.nativeElement.style.boxShadow =
      '5px 5px 10px rgba(0, 0, 0, 0.3)';

  }
  @HostListener('mouseout') onOutfunc () {
    // this.element.nativeElement.style.borderRadius = '40px';
    this.element.nativeElement.style.borderRadius = this.style2;
    this.element.nativeElement.style.boxShadow ='none';
  }

}
