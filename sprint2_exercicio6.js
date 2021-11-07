"use strict";
var EnumDataType;
(function (EnumDataType) {
    EnumDataType[EnumDataType["name"] = 0] = "name";
    EnumDataType[EnumDataType["bio"] = 1] = "bio";
})(EnumDataType || (EnumDataType = {}));
var EnumParadigmType;
(function (EnumParadigmType) {
    EnumParadigmType[EnumParadigmType["functional"] = 0] = "functional";
    EnumParadigmType[EnumParadigmType["imperative"] = 1] = "imperative";
})(EnumParadigmType || (EnumParadigmType = {}));
var list = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var ListInfo = /** @class */ (function () {
    function ListInfo(personId, infoType) {
        this.personId = personId;
        this.infoType = infoType;
    }
    ListInfo.prototype.showInfo = function () {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var person = list_1[_i];
            if (this.personId === person.id) {
                switch (this.infoType) {
                    case EnumDataType.name:
                        return person.name;
                    case EnumDataType.bio:
                        return person.bio;
                }
            }
        }
        console.log("Insira um número que represente um dos id da lista!");
    };
    return ListInfo;
}());
var ListDeletePerson = /** @class */ (function () {
    function ListDeletePerson(receivedList, personId, paradigmType) {
        if (paradigmType === void 0) { paradigmType = EnumParadigmType.functional; }
        this.personId = personId;
        if (paradigmType === EnumParadigmType.functional)
            this.list = Object.assign([], receivedList); /** Faz uma cópia da lista original se o paradigma for funcional */
        else
            this.list = receivedList;
    }
    ListDeletePerson.prototype.deleteElement = function () {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var person = _a[_i];
            if (this.personId === person.id) {
                this.list.splice(list.indexOf(person), 1);
                console.log(person.name + " saiu da lista com sucesso!");
                return this.list;
            }
        }
        console.log("Insira um número que represente um dos id da lista!");
        return this.list;
    };
    return ListDeletePerson;
}());
var ListEditPersonData = /** @class */ (function () {
    function ListEditPersonData(receivedList, personId, dataType, newValue, paradigmType) {
        var _this = this;
        if (paradigmType === void 0) { paradigmType = EnumParadigmType.functional; }
        this.personId = personId;
        this.dataType = dataType;
        this.newValue = newValue;
        if (paradigmType === EnumParadigmType.functional) {
            this.list = [];
            receivedList.forEach(function (objects) { return _this.list.push(Object.assign({}, objects)); }); /** Faz uma cópia da lista original se o paradigma for funcional */
        }
        else
            this.list = receivedList;
    }
    ListEditPersonData.prototype.editData = function () {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var person = _a[_i];
            if (this.personId === person.id) {
                switch (this.dataType) {
                    case EnumDataType.name:
                        person.name = this.newValue;
                        break;
                    case EnumDataType.bio:
                        person.bio = this.newValue;
                        break;
                }
                console.log("Dados do id " + person.id + " Atualizados com sucesso!");
                return this.list;
            }
            console.log("Insira um número que represente um dos id da lista!");
            return this.list;
        }
    };
    return ListEditPersonData;
}());
/** EXECUTANDO O CÓDIGO */
console.log('EXIBINDO NOME DO ID 2');
var listInfoName = new ListInfo(2, EnumDataType.name);
console.log(listInfoName.showInfo());
console.log('EXIBINDO BIO DO ID 2');
var listInfoBio = new ListInfo(2, EnumDataType.bio);
console.log(listInfoBio.showInfo());
console.log("DELETANDO ID 2 COM PARADIGMA FUNCIONAL");
var listDeletePersonFunctional = new ListDeletePerson(list, 2, EnumParadigmType.functional);
console.log(listDeletePersonFunctional.deleteElement());
console.log("LISTA ORIGINAL");
console.log(list);
console.log("DELETANDO ID 2 COM PARADIGMA IMPERATIVO");
var listDeletePersonImperative = new ListDeletePerson(list, 2, EnumParadigmType.imperative);
console.log(listDeletePersonImperative.deleteElement());
console.log("LISTA ORIGINAL");
console.log(list);
console.log("MUDANDO NOME COM PARADIGMA FUNCIONAL");
var listEditPersonDataNameFunctional = new ListEditPersonData(list, 1, EnumDataType.name, "Renato Russo", EnumParadigmType.functional);
console.log(listEditPersonDataNameFunctional.editData());
console.log("LISTA ORIGINAL");
console.log(list);
console.log("MUDANDO BIO COM PARADIGMA FUNCIONAL");
var listEditPersonDataNameFunctional = new ListEditPersonData(list, 1, EnumDataType.bio, "Vocalista da banda Legião Urbana", EnumParadigmType.functional);
console.log(listEditPersonDataNameFunctional.editData());
console.log("LISTA ORIGINAL");
console.log(list);
console.log("MUDANDO NOME COM PARADIGMA IMPERATIVO");
var listEditPersonDataNameFunctional = new ListEditPersonData(list, 1, EnumDataType.name, "Chris Rock", EnumParadigmType.imperative);
console.log(listEditPersonDataNameFunctional.editData());
console.log("MUDANDO BIO COM PARADIGMA IMPERATIVO");
var listEditPersonDataNameFunctional = new ListEditPersonData(list, 1, EnumDataType.bio, "Comediante, ator, roteirista, produtor, dublador e cineasta.", EnumParadigmType.imperative);
console.log(listEditPersonDataNameFunctional.editData());
console.log("LISTA ORIGINAL");
console.log(list);
