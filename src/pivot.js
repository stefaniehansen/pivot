'lang sweet.js';
import { fromKeyword } from '@sweet-js/helpers' for syntax


export syntax para = function(ctx) {
  return #`for`;
};

export syntax funcion = function(ctx) {
  return #`function`;
};

export syntax mientras = function(ctx) {
  return #`while`;
};

export syntax retorna = function(ctx) {
    let ident = ctx.next().value;
    return #`return ${ident}`;
};

export syntax variable = function(ctx) {
  return #`var`;
};
