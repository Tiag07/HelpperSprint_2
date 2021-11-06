enum EnumOperator{
    sum, subtraction, division, multiply
}

function calculator(numA : number, numB : number, operation : EnumOperator) : number{
    switch(operation){

        case EnumOperator.sum:
            return numA + numB;
            break;

        case EnumOperator.subtraction:
            return numA - numB;
            break;

            case EnumOperator.division: 
            return numA/numB;
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