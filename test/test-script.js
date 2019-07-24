// Funcion calls:
fibonacci(2);
//testVarInForLoop(5);
testIfElse(true);

// FUNCION definitions start here:

variable myFuncion = funcion(num) {
    retorna num + 1;
}

funcion fibonacci(num){
    variable a = 1, b = 0, temp;

    mientras (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    variable unaFuncion = funcion() {
        console.log("");
    }

    retorna unaFuncion;
}

// funcion testVarInForLoop(loops){
//     para(variable i = 0; i < loops; i++)
//     {
//         console.log("It Works");
//     }
// }

funcion testIfElse(isItTrue){
    si(isItTrue) {
        console.log("It is true, but why?");
        si(isItTrue){
            console.log("nested if");
        }
        sino si(isItTrue){
            console.log("wattt");
        }
        sino {
            console.log("wat");
        }
    }
    sino si (isItTrue == false) {
        console.log("More ifs???");
        console.log("anotherconsole");
    }
    sino si (false) {
        console.log("How did it get here? not good with computers");
    }
    sino {
        console.log("papanada");
    }
}
