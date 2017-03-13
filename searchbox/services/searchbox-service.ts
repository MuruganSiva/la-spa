import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {SearchBoxState} from '../state/searchbox-state';

@Injectable()

export class SearchBoxService{

    searchterm: Observable<string>;

    constructor(private store: Store<SearchBoxState>){
        this.searchterm = store.select('SearchBoxReducer');
    }

}