import { Action } from '@ngrx/store';


export class SearchBoxActions {
   static StoreEvents = {
        text: 'SearchBox:click',
        getfilter: 'SearchBox:getfilter',
        applyfilter: 'SearchBox:applyfilter'
    };

    onsearch(term : string): Action {
        return {
            type:  SearchBoxActions.StoreEvents.text,
            payload:{
                text: term
            }
        };
    }

    onappliedfilters(filter : string) : Action {
        return {
            type: SearchBoxActions.StoreEvents.applyfilter,
            payload:{
                appliedfilter: filter
            }
        };
    }
}