import {Component, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {WorkFolderIconService} from '../services/workfoldericon-service';
import {WorkFolderItemListModel} from '../state/workfolderitemlist-model';
import {WorkFolderIconState} from '../state/workfolderitemlist-model';
import {Store} from '@ngrx/store';

import { IDynamicComponent } from '../../dynamiccomponent/dynamic-component';
import {WorkFolderItemListModal} from './workfolderitemlist-component';

@Component({
    selector: 'folderitemlist',
    template: `<span (click) = 'foldericonclick(folderItems.itemId)'> 
                Folder Icon {{(folderItems)?.itemId}}
                </span>
                <template #wfitemlistmodal></template>
               `,
    providers: []
})

export class WorkFolderIcon implements IDynamicComponent, AfterViewInit {

    @ViewChild('wfitemlistmodal', {read: ViewContainerRef}) wflistModal: ViewContainerRef;
    key: string;
    payload: any;
    itemCount: number;
    folderIcon: Observable<WorkFolderItemListModel>;
    folderItems: WorkFolderItemListModel;
    

    constructor(
        private service: WorkFolderIconService,
        private store: Store<WorkFolderIconState>,
        private componentResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef
    ) {
        this.itemCount = 3; // TODO: Get the items per page value from Preference service
    }

    ngAfterViewInit(){
        //this.folderIcon = this.service.getWorkFolderItemList(this.payload)
       //.map(folderItems => folderItems.filter(folderItem => folderItem.itemId == this.payload)[0]);

       this.service.getWFslow(this.payload).then(items => this.folderItems = items.filter(
           item => item.itemId == this.payload
       )[0]);
    }

    foldericonclick(itemid: string){
        console.log("Icon Clicked" + itemid);

        let wfitemlistFactory = 
          this.componentResolver.
          resolveComponentFactory(WorkFolderItemListModal);
          
          let viewContainerRef = this.wflistModal;
          viewContainerRef.clear();

          let ref = this.viewContainerRef.createComponent(wfitemlistFactory);

          ref.changeDetectorRef.detectChanges();
    }
}