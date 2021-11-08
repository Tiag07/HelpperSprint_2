
let userList: Array<any> = [60, 60, 60, 20, 20, 20]; /** Maior = 60, Menor = 20, Média = 40 */
const wrongUserList: Array<any> = [60, 60, 'f', 20, true, 20]; /** Lista híbrida, para dar exemplo de invalidação da lista */

enum EnumParadigm {
    functional, imperative
}

class HigherLowerAndAverage {
    constructor(recivedList: Array<any>, paradigm: EnumParadigm = EnumParadigm.functional) {
        this.list = recivedList;
        this.paradigm = paradigm;
    }
    higherLowerAndAverageFromList() : Array<number> {
        let validList: boolean = true;

        for (let element: any of this.list) {
            if (this.validateNumber(element) === false) { /** Lista todos os elementos inválidos no log e define a lista como inválida. */
                console.log(`"${element}" não é um número valido. Insira apenas números válidos na lista!`);
                validList = false;
            }
        }
        if (!validList) {
            console.log("Insira apenas números validos na lista.");
            return;
        }

        let newList: Array<number> = []; /** Cria uma nova lista para receber os 3 valores requisitados */
        newList.push(this.higherValue());
        newList.push(this.lowerValue());
        newList.push(this.averageValue());
        console.log(newList);

        switch (this.paradigm) {
            case EnumParadigm.functional:
                return newList;
            case EnumParadigm.imperative
                userList = newList;
                return userList;
        }
    }

    validateNumber(numberForValidation: any): boolean {
        return typeof (numberForValidation) === 'number';
    }

    higherValue(): number {
        let currentHigherNumber: number = this.list[0];

        for (let element: number of this.list) {
            if (element > currentHigherNumber)
                currentHigherNumber = element;
        }
        return currentHigherNumber;
    }

    lowerValue(): number {
        let currentLowerNumber: number = this.list[0];

        for (let element: number of this.list) {
            if (element < currentLowerNumber)
                currentLowerNumber = element;
        }
        return currentLowerNumber;
    }

    averageValue(): number {
        let accumulatedValue: number = 0;
        let finalAverage: number = 0;

        for (let element: number of this.list)
            accumulatedValue += element;

        finalAverage = accumulatedValue / this.list.length;

        return finalAverage;
    }
}

/** Executando o código */
console.log('---ENVIANDO LISTA COM ELEMENTOS NÃO NUMÉRICOS');
let valuesWrong: HigherLowerAndAverage = new HigherLowerAndAverage(wrongUserList, EnumParadigm.functional);
valuesWrong.higherLowerAndAverageFromList();

console.log('---RETORNANDO NOVA LISTA COM OS VALORES PELO PARADIGMA FUNCIONAL');
let valuesFunctional: HigherLowerAndAverage = new HigherLowerAndAverage(userList, EnumParadigm.functional);
valuesFunctional.higherLowerAndAverageFromList();
console.log('---LISTA ORIGINAL');
console.log(userList);

console.log('---RETORNANDO NOVA LISTA COM OS VALORES PELO PARADIGMA IMPERATIVO');
let valuesImperative: HigherLowerAndAverage = new HigherLowerAndAverage(userList, EnumParadigm.imperative);
valuesImperative.higherLowerAndAverageFromList();
console.log('---LISTA ORIGINAL');
console.log(userList);

