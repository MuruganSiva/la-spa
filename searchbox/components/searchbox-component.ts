import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import {SearchPreFiltersComponent} from './searchprefilters.component';
import {AppliedFilterComponent} from './appliedfilter-component';
import {IPreFilterItems} from '../state/searchprefilter-state';
import {SearchBoxState} from '../state/searchbox-state';
import {AppliedPreFilters} from '../state/appliedprefilter-state';
import {SearchBoxService} from '../services/searchbox-service';
import {SearchPreFilterService} from '../services/searchprefilter-service';

@Component({
    selector: 'searchbox',
    template: `<input type="text" [(ngModel)] = "searchterm">
               <appliedprefilters [appliedfilters]="appliedfilters | async">
               </appliedprefilters>
               <button type="submit" (click) ="onsearch(searchterm)">
               Search</button>
               <searchboxprefilters [prefilteritems]="prefilteritems | async"
               (onapplyfilter)="filterApplied($event)">
               </searchboxprefilters>`,
    providers: [SearchBoxService, SearchPreFilterService]
})

export class SearchBoxComponent implements OnInit{
    searchTerm: Observable<string>;
    prefilteritems: Observable<IPreFilterItems[]>;
    appliedfilters: Observable<AppliedPreFilters[]>;

    constructor(private searchtermService: SearchBoxService,
                private prefilterService: SearchPreFilterService,
                private searchboxStore: Store<SearchBoxState>,
                private appliedfilterStore: Store<AppliedPreFilters>,
                public router: Router)
    {
        this.searchTerm = searchtermService.searchterm;
        this.appliedfilters = appliedfilterStore.select('prefilter');
    }

    ngOnInit(){
        this.prefilteritems = this.prefilterService.loadPreFilters();
    }

    onsearch(searchterm : string){
       this.searchboxStore.dispatch({type: "CLICK_SEARCH", payload: {
           searchterm: searchterm
       }});

       this.router.navigate(['/searchresults']);
    }

    filterApplied(item : IPreFilterItems){
        this.appliedfilterStore.dispatch({ type: 'APPLY_PREFILTER', payload: {
          filterId : item.filterId,
          filterName: item.filterName
      }});
      
    }

}

