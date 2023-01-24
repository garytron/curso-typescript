"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName, "}");
    };
    var noName = 'Peter';
    var name = fullName(noName, 'Parker');
    console.log({ name: name });
})();
//# sourceMappingURL=args-required.js.map