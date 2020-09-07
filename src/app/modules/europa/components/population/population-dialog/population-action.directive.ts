import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[population-action]'
})
export class PopulationActionDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
