import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import {IPreFilterItems} from '../state/searchprefilter-state';

@Injectable()

export class SearchPreFilterService{

    prefilterItems: Observable<IPreFilterItems[]>;
    private _prefilterUrl = '../searchbox/services/prefilters.json';
    
    constructor(private http: Http, private store: Store<IPreFilterItems>){
        this.prefilterItems = store.select('prefilteritems');
    }

    loadPreFilters() : Observable<IPreFilterItems[]> {
        return this.http.get(this._prefilterUrl)
                 .map((res : Response) => <IPreFilterItems[]> res.json());
    }

}