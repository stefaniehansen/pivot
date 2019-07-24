// yah ek ganit pustakaalay hai
// jaavaaskript seekhana

variable x = 2;
variable y = 3;

console.log("yog: " + s(x, y));
console.log("guna karana: " + m(x, y));
console.log("shakti: " + p(x,y));

// kaaryon
function s(x, y){
    vapas x+y;
}

function m(x, y){
    vapas x*y;
}

function p(x,y){
    variable r = x;
    keliye (variable i = 1; i < y; i++){
        r = r * y;
    }
    vapas r;
}