// CODE TO PARSE STARTS HERE
para (variable i = 0; i < 5; i++)
{
    variable testing = 3;
    console.log("It Works: " + i);
}

variable miFuncion = funcion(num) {
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
