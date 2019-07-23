fibonacci(2);
testIfElse(true);
function fibonacci(num_88) {
  var a_89 = 1,
      b_90 = 0,
      temp_91;
  while (num_88 >= 0) {
    temp_91 = a_89;
    a_89 = a_89 + b_90;
    b_90 = temp_91;
    num_88--;
  }
  var unaFuncion_92 = function () {
    console.log("");
  };
  return unaFuncion;
}
function testIfElse(isItTrue_93) {
  if (isItTrue_93) {
    conso le.log("It is true, but why?");
    if (isItTrue_93) {
      console.log("nested if");
    } else if (isItTrue_93) {
      console.log("wattt");
    } else {
      console.log("wat");
    }
  } else if (isItTrue_93 == false) {
    console.log("More ifs???");
    console.log("anotherconsole");
  } else if (false) {
    console.log("How did it get here? not good with computers");
  } else {
    console.log("papanada");
  }
}