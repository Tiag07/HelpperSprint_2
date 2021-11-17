"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonData = /** @class */ (function () {
    function PersonData() {
        this.adaLanguageOwner = false;
    }
    return PersonData;
}());
var originalList = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina", adaLanguageOwner: true },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia", adaLanguageOwner: false },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.", adaLanguageOwner: false },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.", adaLanguageOwner: false }
];
var personList = [];
function exportOriginalListToPersonList(original, newList) {
    var newPersonFactory = new PersonFactory();
    for (var _i = 0, original_1 = original; _i < original_1.length; _i++) {
        var personData = original_1[_i];
        var newPerson = newPersonFactory.getPerson(personData.name, personData.bio, personData.adaLanguageOwner);
        addPersonInTheList(newList, newPerson);
    }
}
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (personName, personBio, adaLanguageOwner) {
        return new Person(personName, personBio, adaLanguageOwner);
    };
    return PersonFactory;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(personName, personBio, adaLanguageOwner) {
        var _this = this;
        _this.id = 0;
        _this.name = personName;
        _this.bio = personBio;
        _this.adaLanguageOwner = adaLanguageOwner;
        return _this;
    }
    Person.prototype.showName = function () {
        console.log(this.name);
    };
    Person.prototype.showBio = function () {
        console.log(this.bio);
    };
    Person.prototype.adaOwnerCheck = function () {
        if (this.adaLanguageOwner)
            console.log("Criou a linguagem de programação Ada.");
        else
            console.log("Não criou a linguagem de programação Ada");
    };
    return Person;
}(PersonData));
function addPersonInTheList(list, person) {
    list.push(person);
    var refreshId = 1;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var person_1 = list_1[_i];
        person_1.id = refreshId;
        refreshId++;
    }
}
function getPersonFromTheList(receivedList, id) {
    for (var _i = 0, receivedList_1 = receivedList; _i < receivedList_1.length; _i++) {
        var person = receivedList_1[_i];
        if (id === person.id)
            return person;
    }
    console.log('O id informado não representa nenhum elemento da lista.');
    return;
}
exportOriginalListToPersonList(originalList, personList);
console.log('--- LISTA DE PESSOAS ---');
console.log(personList);
var personFactory = new PersonFactory(); /** Instanciando a fábrica de pessoas */
var bobEsponja = personFactory.getPerson('Bob esponja', 'Mora em um abacaxi.', false);
addPersonInTheList(personList, bobEsponja);
console.log('--- LISTA COM O BOB ESPONJA ADICIONADO ---');
console.log(personList);
console.log('--- INFORMAÇÕES DO BOB ESPONJA ---');
bobEsponja.showName();
bobEsponja.showBio();
bobEsponja.adaOwnerCheck();
/** Pegando a Ada da lista */
var adaLovelace = getPersonFromTheList(personList, 1);
console.log('--- INFORMAÇÕES DA ADA ---');
adaLovelace.showName();
adaLovelace.showBio();
adaLovelace.adaOwnerCheck();
