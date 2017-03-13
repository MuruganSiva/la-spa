import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import {SearchResults} from '../state/searchresults-state';
import {AppliedPreFilters} from '../../searchbox/state/appliedprefilter-state';
import {SearchBoxState} from '../../searchbox/state/searchbox-state';
 
@Injectable()

export class SearchResultsService{

    searchResults: Observable<SearchResults[]>;
    appliedFilters: Observable<AppliedPreFilters[]>;
    searchterm: Observable<SearchBoxState>;
    

    private _searchResultsUrl = '../searchresults/services/searchresults.json';
    
    constructor(private http: Http,
                private searchresultsStore: Store<SearchResults>,
                private appliedfilterStore: Store<AppliedPreFilters[]>){

        this.searchResults = searchresultsStore.select('searchresults');
        this.appliedFilters = this.appliedfilterStore.select('prefilter');
      
    }

    getSearchResults() : Observable<SearchResults[]> {
        let appliedfilterId: string[] = [];
        this.appliedFilters.subscribe(prefilters => 
        {
            prefilters.map(prefilter => 
            {
               appliedfilterId.push(prefilter.filterId);  
            });
        });

        console.log(appliedfilterId);
        return this.http.get(this._searchResultsUrl)
                 .map((res : Response) => <SearchResults[]> res.json());
    }

}