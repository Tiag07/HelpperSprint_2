interface IPersonData {
    id: number;
    name: string;
    bio: string;
}
enum EnumDataType {
    name, bio
}
enum EnumParadigmType {
    functional, imperative
}

let list: Array<IPersonData> =
    [
        { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
        { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
        { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
        { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
    ];

class ListInfo {
    constructor(personId: number, infoType: EnumDataType) {
        this.personId = personId;
        this.infoType = infoType;
    }

    showInfo() {
        for (let person: IPersonData of list) {
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
    }
}




class ListDeletePerson {
    constructor(receivedList: Array<IPersonData>, personId: number, paradigmType: EnumParadigmType = EnumParadigmType.functional) {
        this.personId = personId;

        if (paradigmType === EnumParadigmType.functional)
            this.list = Object.assign([], receivedList); /** Faz uma cópia da lista original se o paradigma for funcional */
        else this.list = receivedList;
    }

    deleteElement(): Array<IPersonData> {
        for (let person: IPersonData of this.list) {
            if (this.personId === person.id) {
                this.list.splice(list.indexOf(person), 1);
                
                console.log(`${person.name} saiu da lista com sucesso!`);
                return this.list;
            }
        }
        console.log("Insira um número que represente um dos id da lista!");
        return this.list;
    }
}



class ListEditPersonData {
    constructor(receivedList: Array<IPersonData>, personId: number, dataType: EnumDataType, newValue: string, paradigmType: EnumParadigmType = EnumParadigmType.functional) {
        this.personId = personId;
        this.dataType = dataType;
        this.newValue = newValue;

        if (paradigmType === EnumParadigmType.functional) {
            this.list = [];
            receivedList.forEach(objects => this.list.push(Object.assign({}, objects))); /** Faz uma cópia da lista original se o paradigma for funcional */
        }
        else this.list = receivedList;
    }
    editData(): Array<IPersonData> {
        for (let person: IPersonData of this.list) {
            if (this.personId === person.id) {
                switch (this.dataType) {
                    case EnumDataType.name:
                        person.name = this.newValue;
                        break;
                    case EnumDataType.bio:
                        person.bio = this.newValue;
                        break;
                }
                console.log(`Dados do id ${person.id} Atualizados com sucesso!`);
                return this.list;
            }
            console.log("Insira um número que represente um dos id da lista!");
            return this.list;
        }
    }
}
/** EXECUTANDO O CÓDIGO */
console.log('EXIBINDO NOME DO ID 2')
const listInfoName: ListInfo = new ListInfo(2, EnumDataType.name);
console.log(listInfoName.showInfo());
console.log('EXIBINDO BIO DO ID 2')
const listInfoBio: ListInfo = new ListInfo(2, EnumDataType.bio);
console.log(listInfoBio.showInfo());

console.log("DELETANDO ID 2 COM PARADIGMA FUNCIONAL")
const listDeletePersonFunctional: ListDeletePerson = new ListDeletePerson(list, 2 EnumParadigmType.functional);
console.log(listDeletePersonFunctional.deleteElement());
console.log("LISTA ORIGINAL")
console.log(list);

console.log("DELETANDO ID 2 COM PARADIGMA IMPERATIVO")
const listDeletePersonImperative: ListDeletePerson = new ListDeletePerson(list, 2 EnumParadigmType.imperative);
console.log(listDeletePersonImperative.deleteElement());
console.log("LISTA ORIGINAL")
console.log(list);


console.log("MUDANDO NOME COM PARADIGMA FUNCIONAL")
const listEditPersonDataNameFunctional: ListEditPersonData = new ListEditPersonData(list, 1, EnumDataType.name, "Renato Russo", EnumParadigmType.functional);
console.log(listEditPersonDataNameFunctional.editData());
console.log("LISTA ORIGINAL")
console.log(list);
console.log("MUDANDO BIO COM PARADIGMA FUNCIONAL")
const listEditPersonDataNameFunctional: ListEditPersonData = new ListEditPersonData(list, 1, EnumDataType.bio, "Vocalista da banda Legião Urbana", EnumParadigmType.functional);
console.log(listEditPersonDataNameFunctional.editData());
console.log("LISTA ORIGINAL")
console.log(list);

console.log("MUDANDO NOME COM PARADIGMA IMPERATIVO")
const listEditPersonDataNameFunctional: ListEditPersonData = new ListEditPersonData(list, 1, EnumDataType.name, "Chris Rock", EnumParadigmType.imperative);
console.log(listEditPersonDataNameFunctional.editData());
console.log("MUDANDO BIO COM PARADIGMA IMPERATIVO")
const listEditPersonDataNameFunctional: ListEditPersonData = new ListEditPersonData(list, 1, EnumDataType.bio, "Comediante, ator, roteirista, produtor, dublador e cineasta.", EnumParadigmType.imperative);
console.log(listEditPersonDataNameFunctional.editData());
console.log("LISTA ORIGINAL")
console.log(list);



