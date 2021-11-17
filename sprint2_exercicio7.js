"use strict";
var userList = [60, 60, 60, 20, 20, 20]; /** Maior = 60, Menor = 20, Média = 40 */
var wrongUserList = [60, 60, 'f', 20, true, 20]; /** Lista híbrida, para dar exemplo de invalidação da lista */
var EnumParadigm;
(function (EnumParadigm) {
    EnumParadigm[EnumParadigm["functional"] = 0] = "functional";
    EnumParadigm[EnumParadigm["imperative"] = 1] = "imperative";
})(EnumParadigm || (EnumParadigm = {}));
var HigherLowerAndAverage = /** @class */ (function () {
    function HigherLowerAndAverage(recivedList, paradigm) {
        if (paradigm === void 0) { paradigm = EnumParadigm.functional; }
        this.list = recivedList;
        this.paradigm = paradigm;
    }
    HigherLowerAndAverage.prototype.higherLowerAndAverageFromList = function () {
        var validList = true;
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var element = _a[_i];
            if (this.validateNumber(element) === false) { /** Lista todos os elementos inválidos no log e define a lista como inválida. */
                console.log("\"" + element + "\" n\u00E3o \u00E9 um n\u00FAmero valido. Insira apenas n\u00FAmeros v\u00E1lidos na lista!");
                validList = false;
            }
        }
        if (!validList) {
            console.log("Insira apenas números validos na lista.");
            return;
        }
        var newList = []; /** Cria uma nova lista para receber os 3 valores requisitados */
        newList.push(this.higherValue());
        newList.push(this.lowerValue());
        newList.push(this.averageValue());
        console.log(newList);
        switch (this.paradigm) {
            case EnumParadigm.functional:
                return newList;
            case EnumParadigm.imperative:
                userList = newList;
                return userList;
        }
    };
    HigherLowerAndAverage.prototype.validateNumber = function (numberForValidation) {
        return typeof (numberForValidation) === 'number';
    };
    HigherLowerAndAverage.prototype.higherValue = function () {
        var currentHigherNumber = this.list[0];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element > currentHigherNumber)
                currentHigherNumber = element;
        }
        return currentHigherNumber;
    };
    HigherLowerAndAverage.prototype.lowerValue = function () {
        var currentLowerNumber = this.list[0];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element < currentLowerNumber)
                currentLowerNumber = element;
        }
        return currentLowerNumber;
    };
    HigherLowerAndAverage.prototype.averageValue = function () {
        var accumulatedValue = 0;
        var finalAverage = 0;
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var element = _a[_i];
            accumulatedValue += element;
        }
        finalAverage = accumulatedValue / this.list.length;
        return finalAverage;
    };
    return HigherLowerAndAverage;
}());
/** Executando o código */
console.log('---ENVIANDO LISTA COM ELEMENTOS NÃO NUMÉRICOS');
var valuesWrong = new HigherLowerAndAverage(wrongUserList, EnumParadigm.functional);
valuesWrong.higherLowerAndAverageFromList();
console.log('---RETORNANDO NOVA LISTA COM OS VALORES PELO PARADIGMA FUNCIONAL');
var valuesFunctional = new HigherLowerAndAverage(userList, EnumParadigm.functional);
valuesFunctional.higherLowerAndAverageFromList();
console.log('---LISTA ORIGINAL');
console.log(userList);
console.log('---RETORNANDO NOVA LISTA COM OS VALORES PELO PARADIGMA IMPERATIVO');
var valuesImperative = new HigherLowerAndAverage(userList, EnumParadigm.imperative);
valuesImperative.higherLowerAndAverageFromList();
console.log('---LISTA ORIGINAL');
console.log(userList);
