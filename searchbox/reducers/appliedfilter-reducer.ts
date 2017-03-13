import {ActionReducer, Action} from '@ngrx/store';
import {AppliedPreFilters} from '../state/appliedprefilter-state';

export const prefilter = (state: AppliedPreFilters[] = [], action: Action) => {

switch(action.type){
    case 'APPLY_PREFILTER':
        if(state.find(filter => filter.filterId == action.payload.filterId)){
                 return state.filter(item => {
            return item.filterId !== action.payload.filterId;
            })
        }
        else{
             return [...state,
                Object.assign({}, {
                    filterId: action.payload.filterId,
                    filterName: action.payload.filterName
                } )];
        }
    default:
        return state;
}
};