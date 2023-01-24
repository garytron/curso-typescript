"use strict";
(function () {
    var fullName = function (fisrtName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(fisrtName, " ").concat(lastName || 'no lastname').toUpperCase();
        }
        else {
            return "".concat(fisrtName, " ").concat(lastName || 'no lastname');
        }
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=args-default.js.map