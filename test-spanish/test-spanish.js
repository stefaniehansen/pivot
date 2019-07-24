// Esta es una libreria de matematicas
// Aprendiendo JavaScript

variable x = 2;
variable y = 3;

console.log("suma: " + suma(x, y));
console.log("multiplica: " + multiplica(x, y));
console.log("potencia: " + potencia(x,y));

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