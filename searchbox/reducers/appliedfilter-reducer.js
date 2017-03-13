"use strict";
exports.prefilter = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'APPLY_PREFILTER':
            if (state.find(function (filter) { return filter.filterId == action.payload.filterId; })) {
                return state.filter(function (item) {
                    return item.filterId !== action.payload.filterId;
                });
            }
            else {
                return state.concat([Object.assign({}, {
                    filterId: action.payload.filterId,
                    filterName: action.payload.filterName
                })]);
            }
        default:
            return state;
    }
};
//# sourceMappingURL=appliedfilter-reducer.js.map