'lang sweet.js';
import { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax
export syntax savdhan = ctx => {
  console.log("Starting Alert Syntax");
  let alertParensExpression = ctx.next().value;
  return #`alert ${alertParensExpression}`;  
};
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
syntax karo = ctx => {
    // Do
    let doContent = ctx.next().value;

    // While
    let whileKeyword = ctx.next().value;
    if (unwrap(whileKeyword).value !== 'jabki') {
        throw new Error('Do is missing while');
    }
    let whileExpression = ctx.next().value;
    let result = #`do ${doContent} while ${whileExpression}`

    return result
}
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
    let mark = ctx.mark();
    let elseKeyword = ctx.next().value;
    let isItElseIf = ctx.next().value;
    while (unwrap(elseKeyword).value === 'magar' && 
           unwrap(isItElseIf).value === 'agar') {
        let elseIfExpression = ctx.next().value;
        let elseIfContent = ctx.next().value;
        mark = ctx.mark();
        elseKeyword = ctx.next().value;
        isItElseIf = ctx.next().value;
        result = result.concat(#`else if ${elseIfExpression} ${elseIfContent}`)
    }
    
    if (unwrap(elseKeyword).value === 'magar') {
        // At this point the isItElseIf contains the else content
        let elseContent = isItElseIf;
        result = result.concat(#`else ${elseContent}`)
    } else {
        // If we don't find else, reset to before so we don't eat extra tokens
        ctx.reset(mark)
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
export syntax chuno = ctx => {
    let switchExpression = ctx.next().value;
    let result = #`switch ${switchExpression}`;
    // `Expand the switch content and iterate on it
    let switchResult = #``
    let switchContent = ctx.contextify(ctx.next().value);
    for (let switchItem of switchContent) {
        switch (unwrap(switchItem).value) {
            case 'caso':
                let caseExpression = switchContent.next().value;
                switchResult = switchResult.concat(#`case ${caseExpression}`);
                break;
            case 'default':
                let defaultExpression = switchContent.next().value;
                switchResult = switchResult.concat(#`default ${defaultExpression}`);
                break;
            case 'avrodh':
                switchResult = switchResult.concat(#`break`);
                break;
            default:
                switchResult = switchResult.concat(#`${switchItem}`)
        }
    }

    return #`${result} {${switchResult}}`;
}
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
