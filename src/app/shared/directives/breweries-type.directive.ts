import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[breweriesType]'
})
export class BreweriesTypeDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  ngAfterViewInit() {

    // conditional of 'micro'
    if (this._elementRef.nativeElement.innerText.trim() === 'micro') {
      this._renderer.setStyle(this._elementRef.nativeElement,'background-color','#00D1B2')
      this._renderer.setStyle(this._elementRef.nativeElement,'color','#fff')
    }
    
    // conditional of 'contract'
    if (this._elementRef.nativeElement.innerText.trim() === 'contract') {
      this._renderer.setStyle(this._elementRef.nativeElement,'background-color','#fff')
      this._renderer.setStyle(this._elementRef.nativeElement,'color','#000')
    } 

    // conditional of 'large'
    if (this._elementRef.nativeElement.innerText.trim() === 'large') {
      this._renderer.setStyle(this._elementRef.nativeElement,'background-color','#3273DC')
      this._renderer.setStyle(this._elementRef.nativeElement,'color','#fff')
    } 

    // conditional of 'brewpub'
    if (this._elementRef.nativeElement.innerText.trim() === 'brewpub') {
      this._renderer.setStyle(this._elementRef.nativeElement,'background-color','#FFDD57')
      this._renderer.setStyle(this._elementRef.nativeElement,'color','#000')
    } 

    // conditional of 'closed'
    if (this._elementRef.nativeElement.innerText.trim() === 'closed') {
      this._renderer.setStyle(this._elementRef.nativeElement,'background-color','#903660')
      this._renderer.setStyle(this._elementRef.nativeElement,'color','#fff')
    } 
  }
}