import {
    Component,
    OnInit, 
    Input, 
    ViewChild, 
    ComponentFactoryResolver, 
    ViewContainerRef,
    AfterViewInit 
} from '@angular/core';

import { Observable } from 'rxjs/Rx';

import {SearchResults} from '../state/searchresults-state';
import {SearchResultsService} from '../services/searchresults-service';
import {ComponentRegister} from '../../dynamiccomponent/dynamic-componentregister';
import {IDynamicComponent} from '../../dynamiccomponent/dynamic-component';

@Component({
    selector: 'resultitem',
    template: `<div>{{resultitemdata.title}}</div>
               <div>{{resultitemdata.teaser}}</div>
               <template #wficonplaceholder></template>
                `,
    providers: [ ]
    
})

export class ResultItemComponent implements AfterViewInit{

 @Input() resultitemdata: SearchResults;
 @ViewChild('wficonplaceholder', {read: ViewContainerRef}) 
 wflisthost: ViewContainerRef

 constructor(private componentFactoryResolver: ComponentFactoryResolver,
             private viewContainerRef: ViewContainerRef,
             private dynamicComponentRegister: ComponentRegister){
       
 }

 ngAfterViewInit(){
     
     let wficonFactory = 
          this.componentFactoryResolver.
          resolveComponentFactory(this.dynamicComponentRegister.find('wficonplaceholder'));
          
          let viewContainerRef = this.wflisthost;
          viewContainerRef.clear();

          let ref = this.viewContainerRef.createComponent(wficonFactory);
          (ref.instance as IDynamicComponent).payload = this.resultitemdata.itemid;

          ref.changeDetectorRef.detectChanges();
 }
}