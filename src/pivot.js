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
  return #`var`;
};
