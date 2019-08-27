import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewTest]'
})
export class NewTestDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by newTest Directive.";
  }

}