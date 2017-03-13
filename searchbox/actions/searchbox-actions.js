"use strict";
var SearchBoxActions = (function () {
    function SearchBoxActions() {
    }
    SearchBoxActions.prototype.onsearch = function (term) {
        return {
            type: SearchBoxActions.StoreEvents.text,
            payload: {
                text: term
            }
        };
    };
    SearchBoxActions.prototype.onappliedfilters = function (filter) {
        return {
            type: SearchBoxActions.StoreEvents.applyfilter,
            payload: {
                appliedfilter: filter
            }
        };
    };
    SearchBoxActions.StoreEvents = {
        text: 'SearchBox:click',
        getfilter: 'SearchBox:getfilter',
        applyfilter: 'SearchBox:applyfilter'
    };
    return SearchBoxActions;
}());
exports.SearchBoxActions = SearchBoxActions;
//# sourceMappingURL=searchbox-actions.js.map