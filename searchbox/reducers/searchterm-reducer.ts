import { ActionReducer, Action } from '@ngrx/store';
import { SearchBoxComponent } from '../components/searchbox-component';
import {SearchBoxState} from '../state/searchbox-state';
import { SearchBoxActions } from '../actions/searchbox-actions.js';

export const searchbox = (state: SearchBoxState,
                          action: Action) => {

switch(action.type){
    case 'CLICK_SEARCH':
        return Object.assign({}, state, {
            searchterm: action.payload.searchterm
        });
    default:
        return state;
}
};