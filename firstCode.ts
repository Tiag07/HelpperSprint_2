enum EnumOperator{
    sum, subtraction, division, multiply, rest
}

function calculator(numA : any, numB : any, operation : EnumOperator) : number{
    if(!validNumber(numA) || !validNumber(numB)){
        console.log("Números inválidos.");
        return 0;
    }
    
    switch(operation){
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
            return numA/numB;
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

function validNumber(value : any): boolean{
    return !isNaN(value);
}

console.log(calculator('d', 13, EnumOperator.sum));
console.log(calculator(3, 13, EnumOperator.subtraction));
console.log(calculator(3, 13, EnumOperator.division));
console.log(calculator(3, 13, EnumOperator.multiply));
console.log(calculator(3, 13, EnumOperator.rest));