// Esta es una libreria de matematicas
// Aprendiendo JavaScript

variable x = 2;
variable y = 3;

intenta{
    console.log("suma: " + suma(x, y));
    console.log("multiplica: " + multiplica(x, y));
    console.log("potencia: " + potencia(x,y));
    console.log("Este valor es cierto: " + cierto);
    arrojar "error capturado en captura";
}
captura(e)
{
    console.log(e);
}
finalmente
{
    console.log("finalmente ejecutado");
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
