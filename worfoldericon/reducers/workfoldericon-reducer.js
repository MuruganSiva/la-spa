"use strict";
exports.workfoldericon = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'STORE_ITEMID':
            return state.concat([Object.assign({}, {
                itemdid: action.payload
            })]);
        default:
            return state;
    }
};
//# sourceMappingURL=workfoldericon-reducer.js.map