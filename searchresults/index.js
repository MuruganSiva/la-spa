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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var index_1 = require('../searchbox/index');
var searchresults_component_1 = require('./components/searchresults-component');
var searchresultitem_component_1 = require('./components/searchresultitem-component');
var searchresults_service_1 = require('./services/searchresults-service');
var routes = [
    { path: 'searchresults', component: searchresults_component_1.SearchResultsComponent },
];
var SearchResultsModule = (function () {
    function SearchResultsModule() {
    }
    SearchResultsModule = __decorate([
        core_1.NgModule({
            declarations: [searchresults_component_1.SearchResultsComponent, searchresultitem_component_1.ResultItemComponent],
            exports: [searchresults_component_1.SearchResultsComponent],
            providers: [searchresults_service_1.SearchResultsService],
            imports: [router_1.RouterModule.forChild(routes), platform_browser_1.BrowserModule, forms_1.FormsModule, index_1.SearchModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsModule);
    return SearchResultsModule;
}());
exports.SearchResultsModule = SearchResultsModule;
//# sourceMappingURL=index.js.map