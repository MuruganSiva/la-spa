import { APP_BASE_HREF } from '@angular/common';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app-component';
import {SearchModule} from '../searchbox/index'
import {SearchResultsModule} from '../searchresults/index';
import {RecentActivityModule} from '../recentactivity/index';
import {WorkFolderIconModule} from '../worfoldericon/index';
import {DynamicComponentModule} from '../dynamiccomponent/index';
import {WorkFolderIcon} from '../worfoldericon/components/workfoldericon-component';


import {searchbox} from '../searchbox/reducers/searchterm-reducer';
import {prefilter} from '../searchbox/reducers/appliedfilter-reducer';
import {recentactivity} from '../recentactivity/reducers/recentactivity-reducer';
import {workfoldericon} from '../worfoldericon/reducers/workfoldericon-reducer';

const routes: Routes = [
  { path: 'home', component: AppComponent },
]

@NgModule({
  bootstrap: [AppComponent],
  imports:[ 
      BrowserModule,
      RouterModule.forRoot(routes),
      StoreModule,
      FormsModule,
      HttpModule,
      StoreModule.provideStore({
        searchterm : searchbox,
        prefilter: prefilter,
        recentactivity: recentactivity,
        workfoldericon: workfoldericon
      }),
      SearchModule,
      SearchResultsModule,
      RecentActivityModule,
      WorkFolderIconModule,
      DynamicComponentModule
     ],
  declarations: [AppComponent]
})

export class AppModule { 
}