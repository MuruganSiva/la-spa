import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/toPromise';

import { WorkFolderItemListModel } from '../state/workfolderitemlist-model';

@Injectable()

export class WorkFolderIconService {

    private _workFolderItemUrl = '../worfoldericon/services/workfoldericon.json';

    constructor(
        private http: Http,
        private store: Store<WorkFolderItemListModel>) {

    }

    getWorkFolderItemList(itemid: string): Promise<WorkFolderItemListModel[]> {
        this.store.dispatch({
            type: 'STORE_ITEMID', payload: {
                itemid: itemid
            }
        }
        );
       
        let data =  this.http.get(this._workFolderItemUrl)
            .map((res: Response) => <WorkFolderItemListModel[]>res.json());

        return data.toPromise();    
    }

    getWFslow(itemid:string): Promise<WorkFolderItemListModel[]>{
          return new Promise(resolve => {
            setTimeout(() => resolve(this.getWorkFolderItemList(itemid)), 500)
        });
    }
}