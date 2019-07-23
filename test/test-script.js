import { isKeyword } from '@sweet-js/helpers' for syntax

syntax para = ctx => {
  return #`for`;
};

syntax funcion = ctx => {
  return #`function`;
};

syntax mientras = ctx => {
  return #`while`;
};

syntax retorna = ctx => {
    let ident = ctx.next().value;
    return #`return ${ident}`;
};

syntax variable = ctx => {
    let ident = ctx.next().value;
    return #`var ${ident}`;
};

syntax si = ctx => {
    return #`if`;
};

syntax sino = ctx => {

    return #`other`;
};

// Funcion calls:

fibonacci(2);
//testVarInForLoop(5);
testIfElse(true);

// FUNCION definitions start here:

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
        console.log("It is true");
    } sino {
        console.log("It should not go here");
    }
}