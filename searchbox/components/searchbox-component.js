"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var store_1 = require('@ngrx/store');
var router_1 = require('@angular/router');
var searchbox_service_1 = require('../services/searchbox-service');
var searchprefilter_service_1 = require('../services/searchprefilter-service');
var SearchBoxComponent = (function () {
    function SearchBoxComponent(searchtermService, prefilterService, searchboxStore, appliedfilterStore, router) {
        this.searchtermService = searchtermService;
        this.prefilterService = prefilterService;
        this.searchboxStore = searchboxStore;
        this.appliedfilterStore = appliedfilterStore;
        this.router = router;
        this.searchTerm = searchtermService.searchterm;
        this.appliedfilters = appliedfilterStore.select('prefilter');
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        this.prefilteritems = this.prefilterService.loadPreFilters();
    };
    SearchBoxComponent.prototype.onsearch = function (searchterm) {
        this.searchboxStore.dispatch({ type: "CLICK_SEARCH", payload: {
                searchterm: searchterm
            } });
        this.router.navigate(['/searchresults']);
    };
    SearchBoxComponent.prototype.filterApplied = function (item) {
        this.appliedfilterStore.dispatch({ type: 'APPLY_PREFILTER', payload: {
                filterId: item.filterId,
                filterName: item.filterName
            } });
    };
    SearchBoxComponent = __decorate([
        core_1.Component({
            selector: 'searchbox',
            template: "<input type=\"text\" [(ngModel)] = \"searchterm\">\n               <appliedprefilters [appliedfilters]=\"appliedfilters | async\">\n               </appliedprefilters>\n               <button type=\"submit\" (click) =\"onsearch(searchterm)\">\n               Search</button>\n               <searchboxprefilters [prefilteritems]=\"prefilteritems | async\"\n               (onapplyfilter)=\"filterApplied($event)\">\n               </searchboxprefilters>",
            providers: [searchbox_service_1.SearchBoxService, searchprefilter_service_1.SearchPreFilterService]
        }), 
        __metadata('design:paramtypes', [searchbox_service_1.SearchBoxService, searchprefilter_service_1.SearchPreFilterService, store_1.Store, store_1.Store, router_1.Router])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
//# sourceMappingURL=searchbox-component.js.map