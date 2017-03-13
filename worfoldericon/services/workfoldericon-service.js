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
var http_1 = require('@angular/http');
var store_1 = require('@ngrx/store');
require('rxjs/add/operator/toPromise');
var WorkFolderIconService = (function () {
    function WorkFolderIconService(http, store) {
        this.http = http;
        this.store = store;
        this._workFolderItemUrl = '../worfoldericon/services/workfoldericon.json';
    }
    WorkFolderIconService.prototype.getWorkFolderItemList = function (itemid) {
        this.store.dispatch({
            type: 'STORE_ITEMID', payload: {
                itemid: itemid
            }
        });
        var data = this.http.get(this._workFolderItemUrl)
            .map(function (res) { return res.json(); });
        return data.toPromise();
    };
    WorkFolderIconService.prototype.getWFslow = function (itemid) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getWorkFolderItemList(itemid)); }, 500);
        });
    };
    WorkFolderIconService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, store_1.Store])
    ], WorkFolderIconService);
    return WorkFolderIconService;
}());
exports.WorkFolderIconService = WorkFolderIconService;
//# sourceMappingURL=workfoldericon-service.js.map