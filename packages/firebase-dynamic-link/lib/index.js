"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _LinkShortener = _export_star(require("./integration/LinkShortener"), exports);
_export_star(require("./integration/types"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
var getLinkShortener = function(domainUriPrefix) {
    var apiKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : process.env.FIREBASE_API_KEY;
    return new _LinkShortener.LinkShortener({
        domainUriPrefix: domainUriPrefix,
        apiKey: apiKey
    });
};
var _default = getLinkShortener;
