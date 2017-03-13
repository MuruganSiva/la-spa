import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import {IPreFilterItems} from '../state/searchprefilter-state'
import {SearchPreFilterService} from '../services/searchprefilter-service';

@Component({
    selector: 'searchboxprefilters',
    template: `
    <div *ngFor='let prefilteritem of prefilteritems'>
        <input type="checkbox" 
        (change)="onapplyfilter.emit(prefilteritem)">
        {{prefilteritem.filterName}}
    </div>
    `
})

export class SearchPreFiltersComponent{
  @Input() prefilteritems: IPreFilterItems[]; 
  @Output() onapplyfilter = new EventEmitter();
 
}
