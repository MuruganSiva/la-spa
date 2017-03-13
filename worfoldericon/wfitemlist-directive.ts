import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wfitemlist-host]',
})
export class WFItemListDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}