import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wflisthost]'
})
export class WFListDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}