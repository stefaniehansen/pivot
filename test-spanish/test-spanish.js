// Esta es una libreria de matematicas
// Aprendiendo JavaScript

variable x = 2;
variable y = 3;

intenta{
consola.logear("suma: " + suma(x, y));
consola.logear("multiplica: " + multiplica(x, y));
consola.logear("potencia: " + potencia(x,y));
consola.logear("Este valor es cierto: " + cierto);
arrojar "error capturado en captura";
}
captura(e)
{
    consola.logear(e);
}
finalmente
{
    consola.logear("finalmente ejecutado");
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