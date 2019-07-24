'lang sweet.js';
import { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax
export syntax for = ctx => {
  let forExpression = ctx.contextify(ctx.next().value);
  let parensContent = #``;
  for (let forItem of forExpression) {
      let unwrappedItem = unwrap(forItem);
      if(unwrappedItem.value === "var"){
          parensContent = parensContent.concat(#`variable`);
      }
      else 
      {
          parensContent = parensContent.concat(#`${forItem}`);
      }
  }

  let forContext = ctx.next().value;
  let result = #`para (${parensContent}) ${forContext}`;
  
  return result;
};
export syntax function = ctx => {
    return #`funcion`;
};

export syntax if = (ctx) => {
    let ifExpression = ctx.next().value;
    let ifContext = ctx.next().value;
    let result = #`si ${ifExpression} ${ifContext}`;
    // Extract the else in case we are about to see an else if.
    let elseKeyword = ctx.next().value;
    let isItElseIf = ctx.next().value;
    
    while (unwrap(elseKeyword).value === 'else' && 
           unwrap(isItElseIf).value === 'if') {
    let elseIfExpression = ctx.next().value;
    let elseIfContext = ctx.next().value;
    elseKeyword = ctx.next().value;
    isItElseIf = ctx.next().value;
    result = result.concat(#`sino si ${elseIfExpression} ${elseIfContext}`)
    }
    if (unwrap(elseKeyword).value === 'else') {
        // At this point the isItElseIf contains the else context
        let elseContext = isItElseIf;
        result = result.concat(#`sino ${elseContext}`)
    }
    
    return result
};

export syntax return = ctx => {
    let ident = ctx.next().value;
    return #`retorna ${ident}`;
};
export syntax throw = ctx => {
    let ident = ctx.next().value;
    return #`arrojar ${ident}`;
};
export syntax true = ctx => {
    return #`cierto`;
};
// Try catch finally
export syntax try = ctx => {
    // Try
    let tryContent = ctx.next().value;

    // Catch
    let catchKeyword = ctx.next().value;
    if (unwrap(catchKeyword).value !== 'catch') {
        throw new Error('Try is missing catch');
    }
    let catchExpression = ctx.next().value;
    let catchContent = ctx.next().value;

    let result = #`intenta ${tryContent} captura ${catchExpression} ${catchContent}`

    // Finally (optional)
    let finallyKeyword = ctx.next().value;
    if (finallyKeyword) {
        if (unwrap(finallyKeyword).value !== 'finally') {
            throw new Error('Final part of try has to be finally');
        }
        let finallyContent = ctx.next().value;
        result = result.concat(#`finalmente ${finallyContent}`)
    }

    return result
};
export syntax var = ctx => {
    return #`variable`;
};
export syntax while = ctx => {
    return #`mientras`;
};
