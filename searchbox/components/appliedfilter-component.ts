import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import {AppliedPreFilters} from '../state/appliedprefilter-state';

@Component({
    selector: 'appliedprefilters',
    template: `
    <div *ngFor='let appliedfilter of appliedfilters'>
        {{appliedfilter.filterName}}
    </div>
    `
})

export class AppliedFilterComponent{
     @Input() appliedfilters: AppliedPreFilters[]; 
}