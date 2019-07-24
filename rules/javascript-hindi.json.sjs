'lang sweet.js';
import { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax
export syntax screen = ctx => {
  let consoleExpression = ctx.next().value;
  let logExpression = ctx.next().value;
  let consoleParensExpression = ctx.next().value;

  if (unwrap(logExpression).value === "write") {
      return #`console.log ${consoleParensExpression}`;
  }
  else {
      return #`console. ${logExpression} ${consoleParensExpression}`;
  }
  
};
export syntax galat = ctx => {
    return #`false`;
};
export syntax keliye = ctx => {
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
export syntax function = ctx => {
    return #`function`;
};

export syntax agar = (ctx) => {
    let ifExpression = ctx.next().value;
    let ifContent = ctx.next().value;
    let result = #`if ${ifExpression} ${ifContent}`;
    
    // Extract the else in case we are about to see an else if.
    let elseKeyword = ctx.next().value;
    let isItElseIf = ctx.next().value;
    while (unwrap(elseKeyword).value === 'magar' && 
           unwrap(isItElseIf).value === 'agar') {
        let elseIfExpression = ctx.next().value;
        let elseIfContent = ctx.next().value;
        elseKeyword = ctx.next().value;
        isItElseIf = ctx.next().value;
        result = result.concat(#`else if ${elseIfExpression} ${elseIfContent}`)
    }
    
    if (unwrap(elseKeyword).value === 'magar') {
        // At this point the isItElseIf contains the else content
        let elseContent = isItElseIf;
        result = result.concat(#`else ${elseContent}`)
    }
    
    return result
};

export syntax mano = ctx => {
    return #`let`;
};
export syntax kuchnahin = ctx => {
    return #`null`;
};
export syntax vapas = ctx => {
    let ident = ctx.next().value;
    return #`return ${ident}`;
};
export syntax feko = ctx => {
    let ident = ctx.next().value;
    return #`throw ${ident}`;
};
export syntax sahi = ctx => {
    return #`true`;
};
// Try catch finally
export syntax prayas = ctx => {
    // Try
    let tryContent = ctx.next().value;

    // Catch
    let catchKeyword = ctx.next().value;
    if (unwrap(catchKeyword).value !== 'pakad') {
        throw new Error('Try is missing catch');
    }
    let catchExpression = ctx.next().value;
    let catchContent = ctx.next().value;

    let result = #`try ${tryContent} catch ${catchExpression} ${catchContent}`

    // Finally (optional)
    let finallyKeyword = ctx.next().value;
    if (finallyKeyword) {
        if (unwrap(finallyKeyword).value !== 'akhirmein') {
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
export syntax jabki = ctx => {
    return #`while`;
};
