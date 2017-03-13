import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';

import {SearchModule} from '../searchbox/index';

import {SearchResultsComponent} from './components/searchresults-component';
import {ResultItemComponent} from './components/searchresultitem-component';
import {SearchResultsService} from './services/searchresults-service';


const routes: Routes = [
  { path: 'searchresults', component: SearchResultsComponent },
]

@NgModule({
  declarations: [SearchResultsComponent, ResultItemComponent],
  exports: [SearchResultsComponent],
  providers: [SearchResultsService],
  imports:[RouterModule.forChild(routes), BrowserModule, FormsModule, SearchModule]
})

export class SearchResultsModule { }