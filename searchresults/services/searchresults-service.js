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
var http_1 = require('@angular/http');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var SearchResultsService = (function () {
    function SearchResultsService(http, searchresultsStore, appliedfilterStore) {
        this.http = http;
        this.searchresultsStore = searchresultsStore;
        this.appliedfilterStore = appliedfilterStore;
        this._searchResultsUrl = '../searchresults/services/searchresults.json';
        this.searchResults = searchresultsStore.select('searchresults');
        this.appliedFilters = this.appliedfilterStore.select('prefilter');
    }
    SearchResultsService.prototype.getSearchResults = function () {
        var appliedfilterId = [];
        this.appliedFilters.subscribe(function (prefilters) {
            prefilters.map(function (prefilter) {
                appliedfilterId.push(prefilter.filterId);
            });
        });
        console.log(appliedfilterId);
        return this.http.get(this._searchResultsUrl)
            .map(function (res) { return res.json(); });
    };
    SearchResultsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, store_1.Store, store_1.Store])
    ], SearchResultsService);
    return SearchResultsService;
}());
exports.SearchResultsService = SearchResultsService;
//# sourceMappingURL=searchresults-service.js.map