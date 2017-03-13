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
var store_1 = require('@ngrx/store');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./components/app-component');
var index_1 = require('../searchbox/index');
var index_2 = require('../searchresults/index');
var index_3 = require('../recentactivity/index');
var index_4 = require('../worfoldericon/index');
var index_5 = require('../dynamiccomponent/index');
var searchterm_reducer_1 = require('../searchbox/reducers/searchterm-reducer');
var appliedfilter_reducer_1 = require('../searchbox/reducers/appliedfilter-reducer');
var recentactivity_reducer_1 = require('../recentactivity/reducers/recentactivity-reducer');
var workfoldericon_reducer_1 = require('../worfoldericon/reducers/workfoldericon-reducer');
var routes = [
    { path: 'home', component: app_component_1.AppComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes),
                store_1.StoreModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                store_1.StoreModule.provideStore({
                    searchterm: searchterm_reducer_1.searchbox,
                    prefilter: appliedfilter_reducer_1.prefilter,
                    recentactivity: recentactivity_reducer_1.recentactivity,
                    workfoldericon: workfoldericon_reducer_1.workfoldericon
                }),
                index_1.SearchModule,
                index_2.SearchResultsModule,
                index_3.RecentActivityModule,
                index_4.WorkFolderIconModule,
                index_5.DynamicComponentModule
            ],
            declarations: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map