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
            return numA + numB;
            break;
        case EnumOperator.subtraction:
            return numA - numB;
            break;
        case EnumOperator.division:
            return numA / numB;
            break;
        default:
            return numA * numB;
            break;
    }
}
console.log(calculator(3, 13, EnumOperator.sum));
console.log(calculator(3, 13, EnumOperator.subtraction));
console.log(calculator(3, 13, EnumOperator.division));
console.log(calculator(3, 13, EnumOperator.multiply));
