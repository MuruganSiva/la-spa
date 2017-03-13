import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';


import {SearchBoxComponent} from '../searchbox/components/searchbox-component';
import {SearchPreFiltersComponent} from '../searchbox/components/searchprefilters.component';
import {AppliedFilterComponent} from '../searchbox/components/appliedfilter-component';
import {SearchBoxService} from '../searchbox/services/searchbox-service';
import {SearchPreFilterService} from '../searchbox/services/searchprefilter-service';


@NgModule({
  declarations: [SearchBoxComponent, SearchPreFiltersComponent, AppliedFilterComponent],
  exports: [SearchBoxComponent, SearchPreFiltersComponent, AppliedFilterComponent],
  providers: [SearchBoxService, SearchPreFilterService],
  imports:[BrowserModule, FormsModule]
})

export class SearchModule { }