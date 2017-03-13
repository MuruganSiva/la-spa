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
var dynamic_componentregister_1 = require('../../dynamiccomponent/dynamic-componentregister');
var ResultItemComponent = (function () {
    function ResultItemComponent(componentFactoryResolver, viewContainerRef, dynamicComponentRegister) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.dynamicComponentRegister = dynamicComponentRegister;
    }
    ResultItemComponent.prototype.ngAfterViewInit = function () {
        var wficonFactory = this.componentFactoryResolver.
            resolveComponentFactory(this.dynamicComponentRegister.find('wficonplaceholder'));
        var viewContainerRef = this.wflisthost;
        viewContainerRef.clear();
        var ref = this.viewContainerRef.createComponent(wficonFactory);
        ref.instance.payload = this.resultitemdata.itemid;
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResultItemComponent.prototype, "resultitemdata", void 0);
    __decorate([
        core_1.ViewChild('wficonplaceholder', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ResultItemComponent.prototype, "wflisthost", void 0);
    ResultItemComponent = __decorate([
        core_1.Component({
            selector: 'resultitem',
            template: "<div>{{resultitemdata.title}}</div>\n               <div>{{resultitemdata.teaser}}</div>\n               <template #wficonplaceholder></template>\n                ",
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef, dynamic_componentregister_1.ComponentRegister])
    ], ResultItemComponent);
    return ResultItemComponent;
}());
exports.ResultItemComponent = ResultItemComponent;
//# sourceMappingURL=searchresultitem-component.js.map