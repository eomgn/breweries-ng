import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dBreweryType]',
  inputs: ['dBreweryType'],
})
export class BreweryTypeDirective {
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red');

  // if (this.elementRef.nativeElement.innerText.trim() === 'micro') {
  //   console.log('funcionou');
  //   this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'background',
  //     'red'
  //   );
  // }

  // console.log(this.elementRef);

  @Input() dBreweryType!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // if (this.dBreweryType === 'micro') {
    //   this.renderer.setStyle(
    //     this.elementRef.nativeElement,
    //     'background',
    //     'red'
    //   );

    this.breweryTypeColor();
  }

  breweryTypeColor() {
    switch (this.dBreweryType) {
      case 'micro':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#00f'
        );
        break;

      case 'nano':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#fff'
        );
        break;

      case 'regional':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#cac409'
        );
        break;

      case 'brewpub':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#0f0456'
        );
        break;

      case 'large':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#0f0'
        );
        break;

      case 'planning':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#099dca'
        );
        break;

      case 'bar':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#ca7009'
        );
        break;

      case 'contract':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#ca0956'
        );
        break;

      case 'proprietor':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#8a27bc'
        );
        break;

      case 'closed':
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#f00'
        );
        break;

      default:
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background',
          '#515151'
        );
        break;
    }
  }
}
