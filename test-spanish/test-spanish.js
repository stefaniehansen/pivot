// Esta es una libreria de matematicas
// Aprendiendo JavaScript

variable x = 2;
variable y = 3;

intenta
{
    consola.escribe("suma: " + suma(x, y));
    consola.escribe("multiplica: " + multiplica(x, y));
    consola.escribe("potencia: " + potencia(x,y));
    consola.escribe("Este valor es cierto: " + cierto);
    arrojar "error capturado en captura";
}
captura(e)
{
    consola.escribe(e);
}
finalmente
{
    consola.escribe("finalmente ejecutado");
}
// FUNCIONES
funcion suma(x, y){
    retorna x+y;
}

funcion multiplica(x, y){
    retorna x*y;
}

funcion potencia(x,y){
    variable resultado = x;
    para (variable i = 1; i < y; i++){
        resultado = resultado * y;
    }
    retorna resultado;
}

funcion elige (numero){
    eleccion(numero){
        caso 1:
            consola.escribe("chose 1"); 
        parar;
        caso 2:
            consola.escribe("chose 2"); 
        parar;
        caso 3:
            consola.escribe("chose 3"); 
        parar;
        predeterminado :
            consola.escribe("desconocido");
    }
}

function ciclo(veces){
    variable i = 0;
    hacer {
        i++;

    } mientras(i < veces);
    return i;
}