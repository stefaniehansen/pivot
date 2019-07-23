
function fibonacci(num) {
    var a = 1, b = 0, temp;

    // If Else
    if (false) {
        console.log('won\'t be called');
    } else {
        console.log('will be called'); // called
    }

    // Do While
    do {
        console.log("");
    }
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    var unaFuncion = function () {
        console.log("");
    }

    for (i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        if (i == 6) {
            continue;
        }
        console.log(i); // 0, 1, 2, 3, 4
    }

    // Try Catch
    try {
        throw new Error('some error');
    } catch (e) {
        console.log(e.message); // some error
    } finally {
        console.log('finally is called'); // this will be called as well
    }

    debugger;

    let b = 6;
    delete a;

    console.log('prop1' in checkIn); // true

    function some() { }
    console.log(some instanceof Function); // true

    console.log(void 'string'); // undefined

    with (Math) {
        console.log(random()); // 0.5289267443679495 
    }

    // Switch Case
    var expr = 5;
    switch (expr) {
        case 4:
            console.log(4);
            break;
        case 5:
            console.log(5);
            break;
        default:
            console.log('default');
    }

    return unaFuncion;
}

