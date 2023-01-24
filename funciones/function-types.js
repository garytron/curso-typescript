"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Fernando'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
    var myFunction2;
    myFunction2 = greet;
    console.log(myFunction2('Fernando'));
})();
//# sourceMappingURL=function-types.js.map