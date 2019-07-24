'lang sweet.js';
import { fromKeyword, unwrap, isKeyword, fromIdentifier } from '@sweet-js/helpers' for syntax
export syntax function = ctx => {
  return #`function`;
};

export syntax agar = (ctx) => {
    let ifExpression = ctx.next().value;
    let ifContext = ctx.next().value;
    let result = #`if ${ifExpression} ${ifContext}`;
    // Extract the else in case we are about to see an else if.
    let elseKeyword = ctx.next().value;
    
    let isItElseIf = ctx.next().value;
    
    while (unwrap(elseKeyword).value === 'magar' && 
           unwrap(isItElseIf).value === 'agar') {
    let elseIfExpression = ctx.next().value;
    let elseIfContext = ctx.next().value;
    elseKeyword = ctx.next().value;
    isItElseIf = ctx.next().value;
    result = result.concat(#`else if ${elseIfExpression} ${elseIfContext}`)
    }
    if (unwrap(elseKeyword).value === 'magar') {
        // At this point the isItElseIf contains the else context
        let elseContext = isItElseIf;
        result = result.concat(#`else ${elseContext}`)
    }
    
    return result
};

