import { NgModule, OpaqueToken }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';

import {WorkFolderIcon} from './components/workfoldericon-component';
import {WorkFolderIconService} from './services/workfoldericon-service';
import {ComponentRegister } from '../dynamiccomponent/dynamic-componentregister'
import {WorkFolderItemListModal} from './components/workfolderitemlist-component';

export let wficonprovider = new OpaqueToken('wficonp');

@NgModule({
  declarations: [WorkFolderIcon, WorkFolderItemListModal],
  exports: [WorkFolderIcon, WorkFolderItemListModal],
  providers: [{ provide: wficonprovider, useValue: WorkFolderIcon }, WorkFolderIconService],
  entryComponents: [WorkFolderIcon, WorkFolderItemListModal],
  imports:[BrowserModule, FormsModule]
})

export class WorkFolderIconModule {

  constructor(private dynamicComponentRegister: ComponentRegister){
      this.dynamicComponentRegister.register( { key : 'wficonplaceholder', type: WorkFolderIcon });
  }

 }