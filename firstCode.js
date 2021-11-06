"use strict";
var EnumOperator;
(function (EnumOperator) {
    EnumOperator[EnumOperator["sum"] = 0] = "sum";
    EnumOperator[EnumOperator["subtraction"] = 1] = "subtraction";
    EnumOperator[EnumOperator["division"] = 2] = "division";
    EnumOperator[EnumOperator["multiply"] = 3] = "multiply";
})(EnumOperator || (EnumOperator = {}));
function calculator(numA, numB, operation) {
    switch (operation) {
        case EnumOperator.sum:
            console.log("O resultado da operação é: ");
            return numA + numB;
            break;
        case EnumOperator.subtraction:
            console.log("O resultado da operação é: ");
            return numA - numB;
            break;
        case EnumOperator.division:
            console.log("O resultado da operação é: ");
            return numA / numB;
            break;
        default:
            console.log("O resultado da operação é: ");
            return numA * numB;
            break;
    }
}
console.log(calculator(3, 13, EnumOperator.sum));
console.log(calculator(3, 13, EnumOperator.subtraction));
console.log(calculator(3, 13, EnumOperator.division));
console.log(calculator(3, 13, EnumOperator.multiply));
