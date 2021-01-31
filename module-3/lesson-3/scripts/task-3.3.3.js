function calculator (number1, number2, operator){
    
    var result = "";

    switch (operator) {
        
        case '+':
            result = number1 + number2;
            console.log ( number1 + " + " + number2 + " = " + result);
            break;

        case '-':
            result = number1 - number2;
            console.log ( number1 + " - " + number2 + " = " + result);
            break;
                
        case '*':
            result = number1 * number2;
            console.log ( number1 + " * " + number2 + " = " + result);
            break;

        case '/':
            result = number1 / number2;
            console.log ( number1 + " / " + number2 + " = " + result);
            break;

        default:
            console.log ("error");
            break;
            
    }
    
}

calculator ( 10,5,"+");
calculator ( 10,5,"-");
calculator ( 10,5,"*");
calculator ( 10,5,"/");