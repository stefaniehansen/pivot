import { fromKeyword } from '@sweet-js/helpers' for syntax

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

// ACTUAL SCRIPT STARTS HERE:

fibonacci(2);

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