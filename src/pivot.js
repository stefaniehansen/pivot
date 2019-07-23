'lang sweet.js';
import { fromKeyword } from '@sweet-js/helpers' for syntax;


export syntax para = ctx => {
  return #`for`;
};

export syntax funcion = ctx => {
  return #`function`;
};

export syntax mientras = ctx => {
  return #`while`;
};

export syntax retorna = ctx => {
    let ident = ctx.next().value;
    return #`return ${ident}`;
};

export syntax variable = ctx => {
  return #`var`;
};

export syntax parar = ctx => {
  return #`break`;
};

export syntax continuar = ctx => {
  return #`continue`;
};