"use strict";
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
//# sourceMappingURL=app.js.map