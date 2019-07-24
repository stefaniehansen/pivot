'lang sweet.js';
import { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax
export syntax para = ctx => {
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
export syntax funcion = ctx => {
    return #`function`;
};

export syntax si = (ctx) => {
    let ifExpression = ctx.next().value;
    let ifContent = ctx.next().value;
    let result = #`if ${ifExpression} ${ifContent}`;

    // Extract the else in case we are about to see an else if.
    let elseKeyword = ctx.next().value;
    let isItElseIf = ctx.next().value;
    while (unwrap(elseKeyword).value === 'sino' && 
           unwrap(isItElseIf).value === 'si') {
        let elseIfExpression = ctx.next().value;
        let elseIfContent = ctx.next().value;
        elseKeyword = ctx.next().value;
        isItElseIf = ctx.next().value;
        result = result.concat(#`else if ${elseIfExpression} ${elseIfContent}`)
    }
    
    if (unwrap(elseKeyword).value === 'sino') {
        // At this point the isItElseIf contains the else content
        let elseContent = isItElseIf;
        result = result.concat(#`else ${elseContent}`)
    }
    
    return result
};

export syntax retorna = ctx => {
    let ident = ctx.next().value;
    return #`return ${ident}`;
};
// Try catch finally
export syntax intenta = ctx => {
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
export syntax variable = ctx => {
    return #`var`;
};
export syntax mientras = ctx => {
    return #`while`;
};
