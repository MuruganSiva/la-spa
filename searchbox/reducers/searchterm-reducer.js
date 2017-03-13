"use strict";
exports.searchbox = function (state, action) {
    switch (action.type) {
        case 'CLICK_SEARCH':
            return Object.assign({}, state, {
                searchterm: action.payload.searchterm
            });
        default:
            return state;
    }
};
//# sourceMappingURL=searchterm-reducer.js.map