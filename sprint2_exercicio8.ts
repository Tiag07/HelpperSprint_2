class PersonData {
    id: number;
    name: string;
    bio: string;
    adaLanguageOwner: boolean = false;

    showName(): void;
    showBio(): void;
    adaOwnerCheck(): void;
}

const originalList: Array<PersonData> =
    [
        { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina", adaLanguageOwner: true },
        { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia", adaLanguageOwner: false },
        { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.", adaLanguageOwner: false },
        { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.", adaLanguageOwner: false }
    ];

const personList: Array<Person> = [];

function exportOriginalListToPersonList(original: Array<PersonData>, newList: Array<Person>) {
    let newPersonFactory = new PersonFactory();
    for (let personData: PersonData of original) {
        let newPerson: Person = newPersonFactory.getPerson(personData.name, personData.bio, personData.adaLanguageOwner);
        addPersonInTheList(newList, newPerson);
    }
}

class PersonFactory {
    getPerson(personName: string, personBio: string, adaLanguageOwner: boolean) {
        return new Person(personName, personBio, adaLanguageOwner);
    }
}

class Person extends PersonData {
    constructor(personName: string, personBio: string, adaLanguageOwner: boolean) {
        this.id = 0;
        this.name = personName;
        this.bio = personBio;
        this.adaLanguageOwner = adaLanguageOwner;
    }

    showName() {
        console.log(this.name);
    }
    showBio() {
        console.log(this.bio);
    }
    adaOwnerCheck() {
        if (this.adaLanguageOwner) console.log("Criou a linguagem de programação Ada.");
        else console.log("Não criou a linguagem de programação Ada");
    }
}

function addPersonInTheList(list: Array<Person>, person: Person) {//Essa função existe para atualizar os id da lista. Eu poderia ter feito uma func só para isso, mas teria que chamar 2 funções toda vez que adicionasse.
    list.push(person);
    let refreshId = 1;
    for (let person: Person of list) {
        person.id = refreshId;
        refreshId++;
    }
}
function getPersonFromTheList(receivedList: Array<Person>, id: number): Person {
    for (let person: PersonData of receivedList) {
        if (id === person.id) return person;
    }
    console.log('O id informado não representa nenhum elemento da lista.')
    return;
}

exportOriginalListToPersonList(originalList, personList);

console.log('--- LISTA DE PESSOAS ---');
console.log(personList);

let personFactory = new PersonFactory(); /** Instanciando a fábrica de pessoas */

let bobEsponja: Person = personFactory.getPerson('Bob esponja', 'Mora em um abacaxi.', false);
addPersonInTheList(personList, bobEsponja);

console.log('--- LISTA COM O BOB ESPONJA ADICIONADO ---');
console.log(personList);

console.log('--- INFORMAÇÕES DO BOB ESPONJA ---');
bobEsponja.showName();
bobEsponja.showBio();
bobEsponja.adaOwnerCheck();

/** Pegando a Ada da lista */
let adaLovelace = getPersonFromTheList(personList, 1);
console.log('--- INFORMAÇÕES DA ADA ---');
adaLovelace.showName();
adaLovelace.showBio();
adaLovelace.adaOwnerCheck();




