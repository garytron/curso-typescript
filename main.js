"use strict";
var msg = "Hola mundo";
console.log(msg);
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
(function () {
    var fullName = function (fisrtName, lastName) {
        return "".concat(fisrtName, " ").concat(lastName || 'no lastname');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName, "}");
    };
    var noName = 'Peter';
    var name = fullName(noName, 'Parker');
    console.log({ name: name });
})();
(function () {
    var fullName = function (fisrtName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(fisrtName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
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
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    console.log(flash.getName());
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    console.log(flash.getName());
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Inteligencia']
    };
    console.log(typeof myCustomVariable);
})();
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Spiderman';
    console.log(avenger.charAt(0));
    avenger = 150.245344;
    console.log(avenger.toFixed(2));
    console.log(avenger.charAt(0));
    console.log(avenger.toFixed(2));
});
(function () {
    var a = 10;
    console.log(a);
});
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    numbers.forEach(function (n) { return console.log(n.toFixed()); });
})();
(function () {
    var isSpiderman = true;
    var isCarnage = false;
    console.log({ isSpiderman: isSpiderman });
});
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio!');
    console.log('Hola mundo');
})();
(function () {
    var nada = undefined;
    console.log(nada);
});
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
});
(function () {
    var spiderman = 'Spiderman';
    var carnage = "Carnage";
    var venom = "Venom";
    console.log(" I'm ".concat(spiderman));
    console.log(spiderman.toUpperCase());
});
(function () {
    var hero = ['Spiderman', 100, true];
    hero[0] = 'Captain America';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var FuerzasHeroes;
    (function (FuerzasHeroes) {
        FuerzasHeroes[FuerzasHeroes["flash"] = 5] = "flash";
        FuerzasHeroes[FuerzasHeroes["superman"] = 100] = "superman";
        FuerzasHeroes[FuerzasHeroes["batman"] = 1] = "batman";
        FuerzasHeroes[FuerzasHeroes["acuaman"] = 0] = "acuaman";
    })(FuerzasHeroes || (FuerzasHeroes = {}));
    var fuerzaFlash = FuerzasHeroes.flash;
    var fuerzaSuperman = FuerzasHeroes.superman;
    var fuerzaBatman = FuerzasHeroes.batman;
    var fuerzaAcuaman = FuerzasHeroes.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=main.js.map