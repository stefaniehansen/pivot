import { unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax


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

syntax para = ctx => {
    // let forExpression = ctx.contextify(ctx.next().value);
    // for (let stx of forExpression){
    //     console.log(unwrap(stx).value);
    // }
    let forExpression = ctx.next().value;
    let forContext = ctx.next().value;
 
    let result = #`for ${forExpression} ${forContext}`;
 
    return result;
};

syntax variable = ctx => {
    let ident = ctx.next().value;
    console.log("Using variable");
    console.log(ident);
    return #`var ${ident}`;
};

syntax si = ctx => {
    let ifExpression = ctx.next().value;
    let ifContext = ctx.next().value;
    let result = #`if ${ifExpression} ${ifContext}`;
    // Extract the else in case we are about to see an else if.
    let elseKeyword = ctx.next().value;
    
    let isItElseIf = ctx.next().value;
    
    while (unwrap(elseKeyword).value === 'else' && 
           unwrap(isItElseIf).value === 'si') {
    let elseIfExpression = ctx.next().value;
    let elseIfContext = ctx.next().value;
    elseKeyword = ctx.next().value;
    isItElseIf = ctx.next().value;
    result = result.concat(#`else if ${elseIfExpression} ${elseIfContext}`)
    }
    if (unwrap(elseKeyword).value === 'sino') {
        // At this point the isItElseIf contains the else context
        let elseContext = isItElseIf;
        result = result.concat(#`else ${elseContext}`)
    }
    
    return result
   };
   
// Try catch finally
syntax intenta = ctx => {
    // Try
    let tryContent = ctx.next().value;

    // Catch
    let catchKeyword = ctx.next().value;
    if (unwrap(catchKeyword).value !== 'captura') {
        throw new Error('Try is missing catch');
    }
    let catchExpression = ctx.next().value;
    let catchContent = ctx.next().value;

    let result = #`try ${tryContent} catch ${catchExpression} ${catchContent}`

    // Finally (optional)
    let finallyKeyword = ctx.next().value;
    if (finallyKeyword) {
        if (unwrap(finallyKeyword).value !== 'finalmente') {
            throw new Error('Final part of try has to be finally');
        }
        let finallyContent = ctx.next().value;
        result = result.concat(#`finally ${finallyContent}`)
    }

    return result
};


// CODE TO PARSE STARTS HERE

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

funcion testVarInForLoop(loops){
    for(variable i = 0; i < loops; i++)
    {
        console.log("It Works");
    }
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

// Try Catch
intenta {
    console.log("a");
} captura (e) {
    console.log("b");
} finalmente {
    console.log("c");
}