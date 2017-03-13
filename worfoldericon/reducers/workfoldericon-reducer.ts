import {ActionReducer, Action} from '@ngrx/store';
import {WorkFolderItemListModel} from '../state/workfolderitemlist-model';

export const workfoldericon = (state: WorkFolderItemListModel[] = [], action: Action) => {

switch(action.type){
    case 'STORE_ITEMID':
             return [...state,
                Object.assign({}, {
                    itemdid: action.payload
                } )];
    default:
        return state;
}
};