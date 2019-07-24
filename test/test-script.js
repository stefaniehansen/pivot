import { unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax

syntax para = ctx => {
    let forExpression = ctx.contextify(ctx.next().value);
    let parensContent = #``;
    for (let forItem of forExpression) {
        let unwrappedItem = unwrap(forItem);
        if(unwrappedItem.value === "variable"){
            parensContent = parensContent.concat(#`var`);
        }
        else 
        {
            parensContent = parensContent.concat(#`${forItem}`);
        }
    }

    let forContext = ctx.next().value;
    let result = #`for (${parensContent}) ${forContext}`;
    
    return result;
};

//The `syntax` keyword is used to create and name new macros.
syntax variable = ctx => {
    let id = ctx.next().value;
    //console.log(id);
    return #`var ${id}`;
};

// CODE TO PARSE STARTS HERE
para (variable i = 0; i < 5; i++)
{
    variable testing = 3;
    console.log("It Works: " + i);
}
