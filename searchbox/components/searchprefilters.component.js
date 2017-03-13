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
var SearchPreFiltersComponent = (function () {
    function SearchPreFiltersComponent() {
        this.onapplyfilter = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SearchPreFiltersComponent.prototype, "prefilteritems", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchPreFiltersComponent.prototype, "onapplyfilter", void 0);
    SearchPreFiltersComponent = __decorate([
        core_1.Component({
            selector: 'searchboxprefilters',
            template: "\n    <div *ngFor='let prefilteritem of prefilteritems'>\n        <input type=\"checkbox\" \n        (change)=\"onapplyfilter.emit(prefilteritem)\">\n        {{prefilteritem.filterName}}\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPreFiltersComponent);
    return SearchPreFiltersComponent;
}());
exports.SearchPreFiltersComponent = SearchPreFiltersComponent;
//# sourceMappingURL=searchprefilters.component.js.map