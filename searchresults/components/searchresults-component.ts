import {
     Directive,
     Component,
     OnInit, 
     Input, 
     Output, 
     EventEmitter, 
     AfterViewInit,
     ElementRef, 
     ComponentFactoryResolver,
     ViewContainerRef, 
     ViewChild 
    } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import {SearchBoxState} from '../../searchbox/state/searchbox-state';
import {AppliedPreFilters} from '../../searchbox/state/appliedprefilter-state';
import {SearchResults} from '../state/searchresults-state';
import {SearchResultsService} from '../services/searchresults-service';

import {prefilter} from '../../searchbox/reducers/appliedfilter-reducer';


import {WFListDirective} from '../wflist-directive';
 
@Component({
    selector: 'searchresults',
    template: `<div>
                <ul *ngFor='let searchresult of searchresults | async'>
                <li>
                    <resultitem [resultitemdata] = "searchresult"></resultitem>
                </li>
                `,
    providers: [ ]
    
})

export class SearchResultsComponent implements OnInit{

    searchresults: Observable<SearchResults[]>;

    constructor(private searchboxStore: Store<SearchBoxState>,
                private searchresultsService: SearchResultsService
               )
    {

    }

    ngOnInit(){
        this.searchresults = this.searchresultsService.getSearchResults();
    }
}