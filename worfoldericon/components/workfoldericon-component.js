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
var workfoldericon_service_1 = require('../services/workfoldericon-service');
var store_1 = require('@ngrx/store');
var workfolderitemlist_component_1 = require('./workfolderitemlist-component');
var WorkFolderIcon = (function () {
    function WorkFolderIcon(service, store, componentResolver, viewContainerRef) {
        this.service = service;
        this.store = store;
        this.componentResolver = componentResolver;
        this.viewContainerRef = viewContainerRef;
        this.itemCount = 3; // TODO: Get the items per page value from Preference service
    }
    WorkFolderIcon.prototype.ngAfterViewInit = function () {
        //this.folderIcon = this.service.getWorkFolderItemList(this.payload)
        //.map(folderItems => folderItems.filter(folderItem => folderItem.itemId == this.payload)[0]);
        var _this = this;
        this.service.getWFslow(this.payload).then(function (items) { return _this.folderItems = items.filter(function (item) { return item.itemId == _this.payload; })[0]; });
    };
    WorkFolderIcon.prototype.foldericonclick = function (itemid) {
        console.log("Icon Clicked" + itemid);
        var wfitemlistFactory = this.componentResolver.
            resolveComponentFactory(workfolderitemlist_component_1.WorkFolderItemListModal);
        var viewContainerRef = this.wflistModal;
        viewContainerRef.clear();
        var ref = this.viewContainerRef.createComponent(wfitemlistFactory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        core_1.ViewChild('wfitemlistmodal', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], WorkFolderIcon.prototype, "wflistModal", void 0);
    WorkFolderIcon = __decorate([
        core_1.Component({
            selector: 'folderitemlist',
            template: "<span (click) = 'foldericonclick(folderItems.itemId)'> \n                Folder Icon {{(folderItems)?.itemId}}\n                </span>\n                <template #wfitemlistmodal></template>\n               ",
            providers: []
        }), 
        __metadata('design:paramtypes', [workfoldericon_service_1.WorkFolderIconService, store_1.Store, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], WorkFolderIcon);
    return WorkFolderIcon;
}());
exports.WorkFolderIcon = WorkFolderIcon;
//# sourceMappingURL=workfoldericon-component.js.map