"use strict";
var EnumOperator;
(function (EnumOperator) {
    EnumOperator[EnumOperator["sum"] = 0] = "sum";
    EnumOperator[EnumOperator["subtraction"] = 1] = "subtraction";
    EnumOperator[EnumOperator["division"] = 2] = "division";
    EnumOperator[EnumOperator["multiply"] = 3] = "multiply";
    EnumOperator[EnumOperator["rest"] = 4] = "rest";
})(EnumOperator || (EnumOperator = {}));
function calculator(numA, numB, operation) {
    if (!validNumber(numA) || !validNumber(numB)) {
        console.log("Valores inválidos, digite apenas números.");
        return 0;
    }
    switch (operation) {
        case EnumOperator.sum:
            console.log("O resultado da operação será: ");
            return numA + numB;
            break;
        case EnumOperator.subtraction:
            console.log("O resultado da operação será: ");
            return numA - numB;
            break;
        case EnumOperator.division:
            console.log("O resultado da operação será: ");
            return numA / numB;
            break;
        case EnumOperator.multiply:
            console.log("O resultado da operação será: ");
            return numA * numB;
            break;
        case EnumOperator.rest:
            console.log("O resultado da operação será: ");
            return numA % numB;
            break;
    }
}
function validNumber(value) {
    return !isNaN(value);
}
console.log("Sejam Bem Vindos!");
console.log(calculator('d', 13, EnumOperator.sum));
console.log(calculator(3, 13, EnumOperator.subtraction));
console.log(calculator(3, 13, EnumOperator.division));
console.log(calculator(3, 13, EnumOperator.multiply));
console.log(calculator(3, 13, EnumOperator.rest));
