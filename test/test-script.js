import { unwrap, isKeyword } from '@sweet-js/helpers' for syntax

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
    let ifExpression = ctx.next().value;
    let ifContext = ctx.next().value;
    let result = #`if ${ifExpression} ${ifContext}`;
    console.log(result)
    let elseKeyword = ctx.next().value;
    while (unwrap(elseKeyword).value === 'sinosi') {
    let elseExpression = ctx.next().value;
    let elseContext = ctx.next().value;
    elseKeyword = ctx.next().value;
    result = result.concat(#`else if ${elseExpression} ${elseContext}`)
    }
    if (unwrap(elseKeyword).value === 'sino') {
    let elseContext = ctx.next().value;
    result = result.concat(#`else ${elseContext}`)
    }
    
    return result
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
        console.log("It is true, but why?");
        si(isItTrue){
            console.log("nested if");
        }
        sinosi(isItTrue){
            console.log("wattt");
        } 
        sino {
            console.log("wat");
        }
    } sinosi (isItTrue == false) {
        console.log("More ifs???");
        console.log("anotherconsole");
    } 
    sinosi (false){
        console.log("How did it get here? not good with computers");
    }
    sino{
        console.log("papanada");
    }
}