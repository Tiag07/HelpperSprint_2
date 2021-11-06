enum EnumOperator{
    sum, subtraction, division, multiply
}

function calculator(numA : number, numB : number, operation : EnumOperator) : number{
    switch(operation){

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
            return numA/numB;
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