funcion fibonacci(num){
    variable a = 1, b = 0, temp;

    // If Else
    si (falso) {
        console.log('won\'t be called');
    } /*sino {
        console.log('will be called'); // called
    }*/

    // Do While
    hacer {
        console.log("");
    }
    mientras (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    variable unaFuncion = funcion () {
        console.log("");
    }

    para (i = 0; i < 10; i++) {
        si (i == 5) {
            parar;
        }
        si (i == 6) {
            continuar;
        }
        console.log(i); // 0, 1, 2, 3, 4
    }

    // Try Catch
    intenta {
        arrojar nuevo Error('some error');
    } captura (e) {
        returna cierto
    } finalmente {
        retorna nulo
    }

    debugear;

    borrar a;
    deja b = 6;
/*
    funcion some() { }
    console.log(some instanciade Function); // true

    console.log(vacio 'string'); // undefined

    con (Math) {
        console.log(random()); // 0.5289267443679495 
    }

    // Switch Case
    variable expr = 5;
    eleccion (expr) {
        caso 4:
            console.log(4);
            parar;
        caso 4:
            console.log(4);
            parar;
        predeterminado:
            console.log('default');
    }
    */
    retorna unaFuncion;
}